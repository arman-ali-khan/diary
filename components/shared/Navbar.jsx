import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import SearchResults from "../Sections/Search/SearchResults";
import Search from "../Sections/Search/Search";

function Navbar() {
  const [showSearch,setShowSearch] = useState(false)

  // input change
  const [input,setInput] = useState('')
    return (
        <div className="navbar sticky top-0 !py-0 z-[1250] bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
            <Link href={'/create/23'} className="bg-gradient text-white px-4 py-2 rounded">ব্লোগ</Link>
          <Link href={'/create/23'} className="bg-gradient text-white px-4 py-2 rounded">লাইব্রেরী</Link>
          <Link href={'/create/23'} className="bg-gradient text-white px-4 py-2 rounded">অডিও</Link>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text">daisyUI</Link>
        </div>
        <div className="navbar-center hidden sm:flex">
          {/* search */}
          <div className="flex items-center gap-1">
            <div className="relative">
              {
                showSearch?<button onClick={()=>setShowSearch(false)} className="fixed top-0 -z-10 left-0 w-screen h-screen"></button>:''
              }
              {
                input?.length ? <button onClick={()=>setInput('')} className="absolute right-20 hover:bg-zinc-200 hover:rounded-full px-2 py-2"><CgClose /></button>:''
              }
            <input value={input} onChange={e=>setInput(e.target.value)} onFocus={()=>setShowSearch(true)} placeholder="Search..." className="input rounded-full input-bordered md:w-96 z-30 input-sm" type="search" name="search" id="search" />
            {
              showSearch ? 
             input?.length ? <SearchResults />:<Search showSearch={showSearch} setShowSearch={setShowSearch} input={input} setInput={setInput} />:''
            }
            
            <button className="py-1 bg-gradient text-white rounded-full px-4 absolute right-0">Search</button>
            </div>
          </div>
          <ul className="menu menu-horizontal hidden lg:flex gap-4 px-1">
          <Link href={'/create/23'} className="bg-gradient duration-300 text-white px-4 py-2 rounded-full">দিনলিপি</Link>
          <Link href={'/create/23'} className="bg-gradient duration-300 text-white px-4 py-2 rounded-full">পাঠাগার</Link>
          <Link href={'/create/23'} className="bg-gradient duration-300 text-white px-4 py-2 rounded-full">অডিও</Link>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link href={'/create/23'} className="bg-gradient text-white px-4 py-2 rounded">লিখুন</Link>
          <div className="bg-gradient w-12 h-12 text-white rounded-full p-0.5">
         
           <Link href={`/user/12`}>
           <img className="rounded-full w-full h-full" src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" alt="" />
           </Link>
          </div>
         
        </div>

      </div>
    );
}

export default Navbar;