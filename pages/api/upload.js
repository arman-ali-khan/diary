import busboy from 'busboy';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

function generateUniqueID(length = 11) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

const uploadDir = path.join(process.cwd(), 'public/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const CHUNK_SIZE_IN_BYTES = 1000000; // 1 MB

function uploadImageStream(req, res) {
  const bb = busboy({ headers: req.headers });

  bb.on('file', (_, file, info) => {
    const extension = path.extname(info.filename);
    const fileName = `${generateUniqueID()}${extension}`;
    const filePath = path.join(uploadDir, fileName);

    const stream = fs.createWriteStream(filePath);
    file.pipe(stream);

    stream.on('error', (err) => {
      console.error('File stream error:', err);
      res.status(500).json({ success: false, message: 'File stream error' });
    });

    stream.on('finish', () => {
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('File stat error:', err);
          res.status(500).json({ success: false, message: 'File stat error' });
          return;
        }
        res.status(200).json({
          success: true,
          message: 'Image uploaded successfully',
          fileName,
          id: fileName,
          size: stats.size,
        });
      });
    });
  });

  bb.on('error', (err) => {
    console.error('Busboy error:', err);
    res.status(500).json({ success: false, message: 'Busboy error' });
  });

  req.pipe(bb);
}

function getImageStream(req, res) {
  const range = req.headers.range;

  if (!range) {
    return res.status(400).send('Range must be provided');
  }

  const imageId = req.query.imageId;
  const imagePath = path.join(uploadDir, imageId);

  fs.stat(imagePath, (err, stats) => {
    if (err) {
      console.error('File stat error:', err);
      return res.status(404).send('Image not found');
    }

    const imageSizeInBytes = stats.size;
    const chunkStart = Number(range.replace(/\D/g, ''));
    const chunkEnd = Math.min(chunkStart + CHUNK_SIZE_IN_BYTES, imageSizeInBytes - 1);
    const contentLength = chunkEnd - chunkStart + 1;

    const headers = {
      'Content-Range': `bytes ${chunkStart}-${chunkEnd}/${imageSizeInBytes}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': contentLength,
      'Content-Type': 'image/jpeg', // Change this to the appropriate MIME type if necessary
    };

    res.writeHead(206, headers);
    const imageStream = fs.createReadStream(imagePath, {
      start: chunkStart,
      end: chunkEnd,
    });

    imageStream.on('open', () => {
      imageStream.pipe(res);
    });

    imageStream.on('error', (streamErr) => {
      console.error('Image stream error:', streamErr);
      res.status(500).send('Image stream error');
    });
  });
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    return uploadImageStream(req, res);
  } else if (req.method === 'GET') {
    return getImageStream(req, res);
  } else {
    return res.status(405).json({ error: `Method ${req.method} is not allowed` });
  }
}
