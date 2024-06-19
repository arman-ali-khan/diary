import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { FiBarChart2 } from "react-icons/fi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoReceiptOutline } from "react-icons/io5";


function Search({showSearch,setShowSearch,input,setInput}) {
    return (
        <section onMouseEnter={()=>setShowSearch(true)} className="absolute shadow-xl border-2 border-zinc-300 w-full -bottom-96 overflow-hidden overflow-y-auto h-96 bg-white rounded-xl p-2">
                {/* Last search */}
                <div className="flex flex-col space-y-2">
                  <h2 className="px-2 py-1 font-bold flex items-center gap-2"> <IoReceiptOutline /> Recent</h2>
                  <li className="flex items-center justify-between w-full">

                  <Link className="border-b w-full truncate border-zinc-300 link-hover flex items-center justify-between text-xs md:text-sm px-3 py-1" href={`/`}>ভৌতিক গল্প ভৌতিক গল্পভৌতিক গল্প ভৌতিক গল্প ভৌতিক গল্প ভৌতিক গল্প ভৌতিক গল্প </Link>
                  <span className="px-2 rounded hover:text-white py-1 hover:bg-rose-500 duration-300"><CgClose /></span>
                  </li>
                  <li className="flex items-center justify-between w-full">

                  <Link className="border-b w-full truncate border-zinc-300 link-hover flex items-center justify-between text-xs md:text-sm px-3 py-1" href={`/`}>ভৌতিক গল্প ভৌতিক গল্প ভৌতিক গল্প ভৌতিক গল্প ভৌতিক গল্প </Link>
                  <span className="px-2 rounded hover:text-white py-1 hover:bg-rose-500 duration-300"><CgClose /></span>
                  </li>
                  <li className="flex items-center justify-between w-full">

                  <Link className="border-b w-full truncate border-zinc-300 link-hover flex items-center justify-between text-xs md:text-sm px-3 py-1" href={`/`}>Hello World </Link>
                  <span className="px-2 rounded hover:text-white py-1 hover:bg-rose-500 duration-300"><CgClose /></span>
                  </li>
                  <li className="flex items-center justify-between w-full">

                  <Link className="border-b w-full truncate border-zinc-300 link-hover flex items-center justify-between text-xs md:text-sm px-3 py-1" href={`/`}>Hello World </Link>
                  <span className="px-2 rounded hover:text-white py-1 hover:bg-rose-500 duration-300"><CgClose /></span>
                  </li>
                </div>
                {/* Trending */}
               <div className="mt-2">
               <h2 className="font-bold flex items-center gap-2"> <HiArrowTrendingUp /> Trending</h2>
               {/* Trendings */}
               <div className="flex flex-wrap gap-1">
               <Link className="px-2 flex items-center gap-1 py-1 rounded-full border border-zinc-200" href={`/`}><FiBarChart2 />ভালোবাসার গল্প</Link>
               <Link className="px-2 flex items-center gap-1 py-1 rounded-full border border-zinc-200" href={`/`}><FiBarChart2 />গল্প</Link>
               <Link className="px-2 flex items-center gap-1 py-1 rounded-full border border-zinc-200" href={`/`}><FiBarChart2 />ভুতের গল্প</Link>
               <Link className="px-2 flex items-center gap-1 py-1 rounded-full border border-zinc-200" href={`/`}><FiBarChart2 />থ্রিলার</Link>
               <Link className="px-2 flex items-center gap-1 py-1 rounded-full border border-zinc-200" href={`/`}><FiBarChart2 />ভালোবাসার গল্প</Link>
               <Link className="px-2 flex items-center gap-1 py-1 rounded-full border border-zinc-200" href={`/`}><FiBarChart2 />গল্প</Link>
               <Link className="px-2 flex items-center gap-1 py-1 rounded-full border border-zinc-200" href={`/`}><FiBarChart2 />ভালোবাসার গল্প</Link>
               <Link className="px-2 flex items-center gap-1 py-1 rounded-full border border-zinc-200" href={`/`}><FiBarChart2 />গল্প</Link>
               <Link className="px-2 flex items-center gap-1 py-1 rounded-full border border-zinc-200" href={`/`}><FiBarChart2 />ভুতের গল্প</Link>
               <Link className="px-2 flex items-center gap-1 py-1 rounded-full border border-zinc-200" href={`/`}><FiBarChart2 />থ্রিলার</Link>
               <Link className="px-2 flex items-center gap-1 py-1 rounded-full border border-zinc-200" href={`/`}><FiBarChart2 />ভালোবাসার গল্প</Link>
               <Link className="px-2 flex items-center gap-1 py-1 rounded-full border border-zinc-200" href={`/`}><FiBarChart2 />গল্প</Link>
               </div>
               </div>
              </section>
    );
}

export default Search;