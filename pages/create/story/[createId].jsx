"use client";
import { useQuill } from "react-quilljs";

import StoryPart from "@/components/Sections/Story/Create/StoryPart";
import PostHeader from "@/components/shared/PostHeader";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import "quill/dist/quill.bubble.css"; // Add css for snow theme
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const page = () => {
  // react quill
  const theme = "bubble";
  const modules = {
    toolbar: [
      [
        "bold",
        "italic",
        "underline",
        "strike",
        "image",
        "list",
        "header",
        "clean",
      ],
    ],
  };

  const placeholder = "লিখুন...";

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "image",
    "list",
    "header",
    "clean",
  ];

  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder,
  });

  const defaultContent =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("content"));
  quill?.clipboard.dangerouslyPasteHTML(defaultContent);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        // console.log(quill.getText()); // Get text only
        const content = quill.root.innerHTML;
        // console.log(quill.getContents()); // Get delta contents
        typeof window !== "undefined" &&
          localStorage.setItem("content", JSON.stringify(content));
        // console.log(quill.root.innerHTML); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);
  // router
  const router = useRouter();
  // create id
  const params = useParams();
  const id = params?.createId;
  // create new part
  const handleCreateNewPart = () => {
    router.push(`/create/part/${parseInt(id) + 1}`);
  };


  const [imageUrl, setImageUrl] = useState('');
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const blobUrl = URL.createObjectURL(file);
    setImageUrl(blobUrl);
  };
  const [tags,setTags] = useState(['hhh'])
  const [tagValue,setTagValue] = useState('')
  // tags 
  const handleTagAdd = (e) =>{
    if(e?.key === ','||e?.key === "Enter"){
      setTags([...tags,tagValue])
      setTagValue('')
    }
  }

  // handle remove tag
  const handleRemoveTag = (e) =>{
    const data = e.target.value
    tags.filter(tag=>setTags([tag!==data]))
  }
  return (
    <section className="container mx-auto">
      {/* Story header */}
      <PostHeader />
      {/* Story header  end */}
      <div className="flex flex-col-reverse md:flex-row w-full gap-3 mt-12 mb-12">
        {/* instruction */}
        <div className=" md:w-[900px] md:max-w-full md:min-w-[300px] md:ml-12">
          <h2 className="font-bold text-xl">নির্দেশনাঃ</h2>
          <div className="w-full p-2">
            <ul className="trun">
              <li className="list-item list-inside list-decimal">
                গল্প সম্পুর্ন বাংলা ভাষায় লিখতে হবে ।
              </li>
              <li className="list-item list-inside list-decimal">
                লেখার সুবিধার্তে{" "}
                <a
                  className="font-bold text-blue-600"
                  href="https://chromewebstore.google.com/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab"
                  target="_blank"
                >
                  গুগল ইনপুট টুলস
                </a>{" "}
                ব্যবহার করতে পারেন । (
                <a
                  className="font-bold text-blue-600"
                  href="https://chromewebstore.google.com/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab"
                  target="_blank"
                >
                  ব্যবহারের নিয়ম
                </a>
                )
              </li>
              <li className="list-item list-inside list-decimal">
                ছবি আপলোড করার আগে যে কোন কিছু (দরকারি কিছু নয় এমন) লিখে সিলেক্ট
                করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন ।
              </li>
            </ul>
          </div>

          {/* post box */}
          <div className="md:container bg-gradient p-0.5 md:p-1 rounded-md md:rounded-xl h-[400px] md:h-[600px] md:min-h-[500px] md:max-h-[900px] md:w-[800px] md:max-w-full md:min-w-[300px]">
            <div className="text-xs md:text-base bg-base-100 md:min-h-[500px] md:max-h-[800px] h-[400px] md:h-[600px] border rounded md:rounded-lg"
              ref={quillRef}
            />
          </div>
        </div>
        {/* aside */}
        <aside className="w-96 max-w-full min-w-56 space-y-2 h-fit px-4 md:px-2 ">
          {/* <StoryPart /> */}
          <div className="w-full rounded-md border border-zinc-400 p-2">
            <button
              onClick={() => handleCreateNewPart()}
              className="font-bold w-full py-2 text-center flex justify-center items-center gap-2"
            >
              <FaPlus /> নতুন পর্ব তৈরি করুন
            </button>
          </div>
          {/* Featured Image */}
          <div>
         {/* Image */}
         {
          imageUrl ? <div className="flex w-full relative">
         <button onClick={()=>setImageUrl('')} className="absolute bg-white text-rose-500 hover:bg-red-200 rounded-full p-2 duration-300 text-xl right-4 top-4"><CgClose /></button>
         <img src={imageUrl} alt="Uploaded" className="border border-blue-400 border-dotted p-1" style={{ maxWidth: '100%' }} />
         </div>:''
         }
           {
            imageUrl ? '': <label className="bg-blue-100 flex items-center flex-col cursor-pointer duration-300 justify-center border-2 hover:border-dashed rounded-md border-blue-300 h-44 w-full">
              <span className="text-4xl flex justify-center"><BsUpload /></span>
              <input  accept="image/*" 
        onChange={handleImageUpload}  hidden type="file" />
              <p>কভার ছবি আপলোড করুন</p>
            </label>
           }
          </div>
          {/* Tags */}
          <div>
            <h2>ট্যাগ লিখুনঃ</h2>
            <div className="flex flex-wrap items-center">
            {tags?.length &&
              tags?.map((tag,i)=>{
                return <div className="px-2 flex items-center gap-1 py-1 w-fit border border-zinc-300 rounded-md" key={i}>{tag}<span value={tag} onClick={(e)=>handleRemoveTag(e)} className="cursor-pointer hover:text-rose-500 hover:bg-rose-100 rounded-full p-1"><CgClose /></span></div>
              })
            }
              <input className="w-full border-zinc-300 py-2 px-2 rounded-md border" onKeyDown={handleTagAdd} placeholder="ট্যাগ লিখুন..." value={tagValue} onChange={(e)=>setTagValue(e.target.value)} type="text" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default page;
