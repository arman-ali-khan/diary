import Link from "next/link";
import { useState } from "react";
import { BsPlay } from "react-icons/bs";

import { RemoveScroll } from "react-remove-scroll";


function SearchResults() {
    const [search,setSearch] = useState('story')
    
  return (
    <RemoveScroll className="absolute z-50 w-full -bottom-96 overflow-hidden overflow-y-auto h-96 bg-base-100 rounded-xl p-2">
      <div>
        <div className="flex scroll flex-col gap-2">
          <div className="flex justify-between sticky z-50 -top-2 bg-base-100 border-b">
          <button style={{borderBottom:search==='story'?'4px solid darkorchid':''}} onClick={()=>setSearch('story')} className="px-2 py-1 font-bold text-xs sm:text-sm md:text-sm">
            Stories
          </button>
          <button style={{borderBottom:search==='ebook'?'4px solid darkorchid':''}} onClick={()=>setSearch('ebook')} className="px-2 py-1 font-bold text-xs sm:text-sm md:text-sm">
            eBooks
          </button>
          <button style={{borderBottom:search==='audio'?'4px solid darkorchid':''}} onClick={()=>setSearch('audio')} className="px-2 py-1 font-bold text-xs sm:text-sm md:text-sm">
            Audios
          </button>
          <button style={{borderBottom:search==='blog'?'4px solid darkorchid':''}} onClick={()=>setSearch('blog')} className="px-2 py-1 font-bold text-xs sm:text-sm md:text-sm">
            Blogs
          </button>
          </div>
          <div>
            {
                search === 'story' ?  <div>
                <ul className="flex flex-col gap-2">
                 {
                  [...Array(12).keys()].map((story,i)=>{
                      return  <li key={i} className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <div className="w-20 h-16 rounded-md overflow-hidden">
                          <img
                            className="object-cover"
                            src="https://via.placeholder.com/150/771796"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col truncate">
                          <Link
                            className="font-bold truncate text-xs sm:text-sm md:text-sm"
                            href={"/story/12"}
                          >
                            Hello world story for user search bar result
                          </Link>
                          <div className="flex gap-2">
                            <p className="text-xs sm:text-sm">
                              Created: <span>12days ago</span>
                            </p>
                            <p className="text-xs sm:text-sm">
                              {" "}
                              author: <span>@samrat</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  })
                 }
                </ul>
              </div>:''
            }
            {/* search ebook */}
            {
            search === 'ebook' &&  <div>
            <ul className="grid gap-2 grid-cols-3">
             {
              [...Array(12).keys()].map((story,i)=>{
                  return  <li key={i} className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="w-full h-44 items-center relative rounded-md overflow-hidden">
                     
                      <img
                        className="object-cover w-full h-full"
                        src="https://via.placeholder.com/150/771796"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col truncate">
                      <Link
                        className="font-bold truncate text-xs sm:text-sm"
                        href={"/story/12"}
                      >
                        Hello world story for user search bar result
                      </Link>
                      <div className="flex gap-1">
                        <p className="text-xs truncate sm:text-sm">
                          <span>12 day ago</span>
                        </p>
                        <p className="text-xs truncate sm:text-sm">
                          {" "}
                         <span>@samrat</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              })
             }
            </ul>
          </div>
           }
            {/* search audio */}
           {
            search === 'audio' &&  <div>
            <ul className="flex flex-col gap-2">
             {
              [...Array(12).keys()].map((story,i)=>{
                  return  <li key={i} className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <div className="w-20 h-16 flex justify-center cursor-pointer items-center relative rounded-md overflow-hidden">
                        <span className="absolute text-2xl"><BsPlay /></span>
                      <img
                        className="object-cover"
                        src="https://via.placeholder.com/150/771796"
                        alt=""
                      />
                    </div>
                    <div className="flex gap-1 flex-col truncate">
                      <Link
                        className="font-bold truncate text-xs sm:text-sm md:text-sm"
                        href={"/story/12"}
                      >
                        Hello world story for user search bar result
                      </Link>
                      <div className="flex gap-2">
                        <p className="text-xs sm:text-sm">
                          Created: <span>12days ago</span>
                        </p>
                        <p className="text-xs sm:text-sm">
                          {" "}
                          author: <span>@samrat</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              })
             }
            </ul>
          </div>
           }

           {/* search blog */}
           {
                search === 'blog' ?  <div>
                <ul className="flex flex-col gap-2">
                 {
                  [...Array(12).keys()].map((story,i)=>{
                      return  <li key={i} className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <div className="w-20 h-16 rounded-md overflow-hidden">
                          <img
                            className="object-cover"
                            src="https://via.placeholder.com/150/771796"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col truncate">
                          <Link
                            className="font-bold truncate text-xs sm:text-sm md:text-sm"
                            href={"/story/12"}
                          >
                            Hello world story for user search bar result
                          </Link>
                          <div className="flex gap-2">
                            <p className="text-xs sm:text-sm">
                              Created: <span>12days ago</span>
                            </p>
                            <p className="text-xs sm:text-sm">
                              {" "}
                              author: <span>@samrat</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  })
                 }
                </ul>
              </div>:''
            }
          </div>
        </div>
      </div>
    </RemoveScroll>
  );
}

export default SearchResults;
