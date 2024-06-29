import CreateStoryPard from "@/components/Create/CreateStoryPart";
import PostHeader from "@/components/shared/PostHeader";
import { useGetStoryQuery } from "@/redux/features/api/storyApi";
import { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
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

    
    const {isError,isFetching,isLoading,isSuccess,data:stories,error} = useGetStoryQuery('/posts')


  return (
    <section className="container mx-auto">
      <PostHeader />
      {/* parts */}
      <div className="p-4 bg-gradient">
        <h2 className="text-left flex-col sm:flex-row font-black flex items-center gap-3">
         <div className="flex w-full items-center gap-2">
         {
          !writeTitle ? <p onDoubleClick={()=>setWriteTitle(true)} className="w-full tooltip border sm:w-96 px-4 rounded-md text-left tooltip-top" data-tip="Double click to edit" >গল্পের নাম । আমার সোনার বাংলা</p>:
          <input type="text" disabled={!writeTitle} onBlur={()=>setWriteTitle(false)} className="w-full sm:w-96 px-4 rounded-md truncate disabled:text-white" defaultValue={'গল্পের নাম । আমার সোনার বাংলা'} />
         }
          <span onClick={()=>setWriteTitle(!writeTitle)} className="px-4 cursor-pointer rounded-md  text-white w-12 py-2 inline-block">
          <span onClick={()=>setWriteTitle(!writeTitle)} className="px-4 cursor-pointer rounded-md  text-white w-24 py-2 inline-block">
          {writeTitle? <span className="flex items-center gap-2"><BsCheck2 /> Save</span>: <span className="flex items-center gap-2"><CgPen />Edit</span>}
          </span>
          </span>
         </div>
        </h2>
        <div className="flex flex-col z-40">
        {writeSummary ? <textarea onBlur={()=>setWriteSummary(false)} style={{ height }} onChange={handleChange}  className="px-3 h-fit py-2 rounded-md min-h-44 overflow-hidden text-sm disabled:text-white"> 
         গল্পের সামারি ছবি আপলোড করার আগে যে কোন কিছু (দরকারি কিছু নয় এমন) লিখে
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
          :
           <p  data-tip="Double click to edit" style={{ height }} onDoubleClick={()=>setWriteSummary(true)} className="px-3 h-fit border py-2 rounded-md min-h-44 tooltip tooltip-top text-left cursor-pointer text-sm disabled:text-white"> 
         গল্পের সামারি ছবি আপলোড করার আগে যে কোন কিছু (দরকারি কিছু নয় এমন) লিখে
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
          </p>
           }
          <span onClick={()=>setWriteSummary(!writeSummary)} className="px-4 cursor-pointer rounded-md  text-white w-24 py-2 inline-block">
          {writeSummary? <span className="flex items-center gap-2"><BsCheck2 /> Save</span>: <span className="flex items-center gap-2"><CgPen />Edit</span>}
          </span>
        </div>
      </div>
      <div className="flex justify-end my-3 w-full">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
    <button className="px-4 py-2 bg-gradient text-white font-bold rounded-full w-fit" onClick={()=>document.getElementById('my_modal_3').showModal()}> Create New Part</button>

      </div>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 my-4 w-full">
        {stories?.slice(0,12)?.map((part, i) => <CreateStoryPard key={i} part={part} />)}
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
        <h3 className="font-bold text-lg mb-4">Create New Part</h3>
        <div>
          <label htmlFor="title">
            Title
          </label>
            <input id="title" type="text" placeholder="Title" className=" input input-bordered w-full" />
          <label htmlFor="summary">
            Summary
          </label>
            <textarea id="summary" type="text" placeholder="Summary" className="textarea textarea-bordered w-full" />
            <div className="flex justify-end items-end p-2">
            <button className="px-4 py-2 rounded-full bg-gradient font-bold">Create</button>
            </div>
        </div>
      </div>
    </dialog>
}