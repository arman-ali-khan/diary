import Story from "@/components/Home/Stories/Story";
import StoryEdit from "@/components/Home/Stories/StoryEdit";
import StoryPart from "@/components/Sections/Story/Create/StoryPart";
import PostHeader from "@/components/shared/PostHeader";
import { convertToBengaliNumber } from "@/lib/convertToBengaliNumber";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

function createId() {
  return (
  <section className="container mx-auto">
   <PostHeader />
   <div className="flex flex-col-reverse md:flex-row w-full gap-3 mt-12 mb-12">
        {/* instruction */}
        <div className="w-full md:ml-12">
          <h2 className="font-bold text-xl">আমার গল্প গুলো</h2>
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
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
        {
          [...Array(4).keys()]?.map((story,i)=>{
            return <StoryEdit />
          })
         }
         <div className="card-container min-w-48 max-h-96 max-w-56 w-64 flex justify-center relative">
        <Link className="card card-compact border rounded-lg items-center shadow-xl justify-center flex h-full text-center w-full" href={'/create/part/123'}>
          <FaPlus size={55} />
          <p>নতুন গল্প</p>
        </Link>
      </div>
        </section>
       
        </div>
        {/* aside */}
        {/* <aside className="w-96 max-w-fit min-w-56 space-y-2 h-fit px-4 md:px-2 ">
          <StoryPart />
          <div className="w-full rounded-md border border-zinc-400 p-2">
            <button
              onClick={() => handleCreateNewPart()}
              className="font-bold w-full py-2 text-center flex justify-center items-center gap-2"
            >
              <FaPlus /> নতুন পর্ব তৈরি করুন
            </button>
          </div>
        </aside> */}
      </div>
  </section>
  );
}

export default createId;