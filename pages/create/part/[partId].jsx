import PostHeader from "@/components/shared/PostHeader";
import { convertToBengaliNumber } from "@/lib/convertToBengaliNumber";
import Link from "next/link";
import { useState } from "react";
import { BsCheck2, BsPen } from "react-icons/bs";
import { CgPen } from "react-icons/cg";

function partId() {
    const [value, setValue] = useState('');
    const [height, setHeight] = useState('100%');
    // auto increase
    const handleChange = (event) => {
        setValue(event.target.value);
        setHeight(event.target.scrollHeight + 'px');
      };

    const [writeTitle,setWriteTitle] = useState(false)
    const [writeSummary,setWriteSummary] = useState(false)
  return (
    <section className="container mx-auto">
      <PostHeader />
      {/* parts */}
      <div className="p-4 bg-gradient">
        <h2 className="text-left font-black flex items-center gap-3">
          <input type="text" disabled={!writeTitle} className="w-72 px-4 rounded-md truncate disabled:text-white" defaultValue={'গল্পের নাম । আমার সোনার বাংলা'} />
          <span onClick={()=>setWriteTitle(!writeTitle)} className="px-4 cursor-pointer rounded-md  text-white w-12 py-2 inline-block">
            {writeTitle? <BsCheck2 />:<CgPen />}
          </span>
        </h2>
        <p className="flex flex-col">
         <textarea style={{ height }} onChange={handleChange} disabled={!writeSummary} className="px-3 h-fit py-2 rounded-md min-h-44 overflow-hidden text-sm disabled:text-white"> গল্পের সামারি ছবি আপলোড করার আগে যে কোন কিছু (দরকারি কিছু নয় এমন) লিখে
          সিলেক্ট করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন । লিখে সিলেক্ট
          করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন ।
          গল্পের সামারি ছবি আপলোড করার আগে যে কোন কিছু (দরকারি কিছু নয় এমন) লিখে
          সিলেক্ট করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন । লিখে সিলেক্ট
          করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন ।
          গল্পের সামারি ছবি আপলোড করার আগে যে কোন কিছু (দরকারি কিছু নয় এমন) লিখে
          সিলেক্ট করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন । লিখে সিলেক্ট
          করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন ।
          গল্পের সামারি ছবি আপলোড করার আগে যে কোন কিছু (দরকারি কিছু নয় এমন) লিখে
          সিলেক্ট করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন । লিখে সিলেক্ট
          করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন ।গল্পের সামারি ছবি আপলোড করার আগে যে কোন কিছু (দরকারি কিছু নয় এমন) লিখে
          সিলেক্ট করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন । লিখে সিলেক্ট
          করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন ।গল্পের সামারি ছবি আপলোড করার আগে যে কোন কিছু (দরকারি কিছু নয় এমন) লিখে
          সিলেক্ট করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন । লিখে সিলেক্ট
          করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন ।
          </textarea>
          <span onClick={()=>setWriteSummary(!writeSummary)} className="px-4 cursor-pointer rounded-md  text-white w-12 py-2 inline-block">
          {writeSummary? <BsCheck2 />:<CgPen />}
          </span>
        </p>
      </div>
      <div className="flex justify-end my-3 w-full">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
    <button className="px-4 py-2 bg-gradient text-white font-bold rounded-md w-fit" onClick={()=>document.getElementById('my_modal_3').showModal()}> Create New Part</button>

      </div>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 my-4 w-full">
        {[...Array(12).keys()]?.map((part, i) => {
          return (
            <div
              key={i}
              className="max-h-44 relative min-h-44 w-full h-full border border-zinc-400 rounded-md p-2"
            >
              <Link href={`/create/story/12`}>
             
                <h2 className="truncate text-lg font-bold">
                  পর্ব ১ । আমার সোনার বাংলা ।
                </h2>
                <p className="text-sm">
                  পর্ব ১ । আমার সোনার বাংলা । পর্ব ১ । আমার সোনার বাংলা ।
                </p>
              </Link>
              <div className="flex left-0 absolute bottom-0 justify-between w-full">
                <button className="bg-blue-100 text-blue-600 w-full py-1 rounded-l-full hover:bg-blue-200">
                  Edit
                </button>
                <button className="bg-rose-100 text-rose-600 w-full py-1 rounded-r-full hover:bg-rose-200">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <ModalNewPart />
    </section>
  );
}

export default partId;

const ModalNewPart = () =>{
    return     <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
}