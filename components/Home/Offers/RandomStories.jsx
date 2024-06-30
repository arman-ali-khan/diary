import Link from "next/link";
import { PiCrownLight } from "react-icons/pi";

function RandomStories() {
  return (
    <>
 <div className="text-xl font-bold">Random Stories</div>
    <div className="flex flex-col xl:flex-row gap-2">
   
      <div className="card card-side bg-base-100 flex flex-col sm:flex-row shadow-xl overflow-hidden relative">
      <span className="absolute right-0 rounded-bl-2xl bg-gradient p-2"><PiCrownLight className=" text-xl text-white" /></span>
        <figure>
          <img
            className="sm:w-44 w-full h-44 sm:h-full md:h-64"
            src="https://static-assets.pratilipi.com/pratilipi_premium/data/372607/cover_image/372607.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body p-2 sm:p-4">
          <h2 className="card-title">দ্রাক্ষানী</h2>
          <p>
            কৌশিকি অমাবস্যা শুরু হতে বেশি দেরী নেই । দেবীর পুজো কিছুক্ষণ পরেই
            আরম্ভ হবে প্রস্তুতি তুঙ্গে । দ্রাক্ষরাজ ইন্দ্রাসিস লাল রঙের কৌপিন
            বস্ত্রে আজ প্রস্তুত হয়েছেন পুজোর জন্য । বেলে পাথরের তৈরি এই ...
          </p>
          <div className="card-actions justify-end">
            <Link href={`/story/12/12`} className="bg-gradient px-6 py-2 rounded-full text-white">পড়ুন</Link>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 flex flex-col sm:flex-row shadow-xl overflow-hidden relative">
      <span className="absolute right-0 rounded-bl-2xl bg-gradient p-2"><PiCrownLight className=" text-xl text-white" /></span>
        <figure>
          <img
            className="sm:w-44 w-full h-44 sm:h-full md:h-64"
            src="https://static-assets.pratilipi.com/series/cover?seriesId=835561&version=42b7683a-ea0e-4431-922f-9aef51cf21b7"
            alt="Movie"
          />
        </figure>
        <div className="card-body p-2 sm:p-4">
          <h2 className="card-title">এক চিলতে রোদ্দুর</h2>
          <p>
          একটা সাদামাটা বছর বত্রিশের না বুড়ি না ছুরি রাশি সেন আর তার স্বার্থপর পরিবারের থোর বড়ি খাড়া আর খাড়া বড়ি থোর জীবনে হঠাৎ করেই আগমন ঘটে অগ্নিদেব ব্যানার্জি নামক এক ফুড চেন ব্যাবসায়ীর। বছর ...
          </p>
          <div className="card-actions justify-end">
            <Link href={`/story/12/12`} className="bg-gradient px-6 py-2 rounded-full text-white">পড়ুন</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default RandomStories;
