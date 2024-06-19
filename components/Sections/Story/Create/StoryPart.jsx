'use client';
import { convertToBengaliNumber } from "@/lib/convertToBengaliNumber";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

function StoryPart() {
   // create id
  const params = useParams()
  const id = params?.createId
    // title
    const [data,setData] = useState([])
  
    return (
        <>
       {
         [...Array(parseInt(5))]?.map((oldPart,i)=>{
            return  <Link href={`/create/${i+1}`}>
            <div className='w-full cursor-pointer rounded-md border border-zinc-400 p-2'>
            <h1 className='text-base font-bold'>পর্ব {convertToBengaliNumber(i+1)}</h1>
            <p className='font-bold px-3 py-1'>টাইটেল দিন</p>
          </div>
            </Link>
         })
       }
        <div className='w-full rounded-md border border-zinc-400 p-2'>
        <h1 className='text-base font-bold'>পর্ব {convertToBengaliNumber(parseInt(id))}</h1>
        <input defaultValue={'নতুন টাইটেল দিন'} contentEditable onBlur={e=>setData([...data,{title:e.target.value,part:parseInt(id)}])} className='font-bold link-hover px-3 py-1'/>
      </div>
        </>
    );
}

export default StoryPart;