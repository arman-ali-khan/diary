import useGetUser from "@/hooks/useGetUser";
import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import Search from "../Sections/Search/Search";
import SearchResults from "../Sections/Search/SearchResults";
import Drawer from "./Drawer";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  // user
  const [user, isError, isLoading, isSuccess] = useGetUser();
  // input change
  const [input, setInput] = useState("");
  return (
    <>
      <div className="navbar !min-h-12 !my-0 sticky top-0 w-full !py-0 z-[1250] bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label htmlFor="my-drawer" role="button" className="btn btn-sm md:btn-md btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
         
        </div>
        <Link href="/" className="btn btn-sm md:btn-md btn-ghost text">
          Logo
        </Link>
      </div>
      <div className="navbar-center hidden sm:flex">
        {/* search */}
        <div className="flex items-center gap-1">
          <div className="relative">
            {showSearch ? (
              <button
                onClick={() => setShowSearch(false)}
                className="fixed top-0 -z-10 left-0 w-screen h-screen"
              ></button>
            ) : (
              ""
            )}
            {input?.length ? (
              <button
                onClick={() => setInput("")}
                className="absolute right-20 hover:bg-zinc-200 hover:rounded-full px-2 py-2"
              >
                <CgClose />
              </button>
            ) : (
              ""
            )}
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setShowSearch(true)}
              placeholder="Search..."
              autoComplete="off"
              className="input rounded-full input-bordered md:w-96 z-30 input-sm"
              type="search"
              name="search"
              id="search"
            />
            {showSearch ? (
              input?.length ? (
                <SearchResults />
              ) : (
                <Search
                  showSearch={showSearch}
                  setShowSearch={setShowSearch}
                  input={input}
                  setInput={setInput}
                />
              )
            ) : (
              ""
            )}

            <button className="py-1 bg-gradient text-white rounded-full px-4 absolute right-0">
              Search
            </button>
          </div>
        </div>
        <ul className="menu menu-horizontal hidden lg:flex gap-4 px-1">
          <Link
            href={"/blog"}
            className="duration-300 hover:underline px-4 rounded-full"
          >
            ব্লগ
          </Link>
          <Link
            href={"/ebook"}
            className="duration-300 hover:underline px-4 rounded-full"
          >
            ই-বুক
          </Link>
          <Link
            href={"/audio"}
            className="duration-300 hover:underline px-4 rounded-full"
          >
            অডিও গল্প
          </Link>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {!user?.username ? (
         <>
          <div className="flex items-center gap-3">
            <Link
              href={"/create"}
              className="bg-gradient text-white px-4 py-1 rounded-full"
            >
              লিখুন
            </Link>
            <div className="w-fit flex items-center justify-center h-6 text-white rounded-full p-0.5">
            <div className="bg-gradient z-30 w-fit flex items-center justify-center gap-1 h-12 rounded-full p-0.5">
              <Link className="rounded-full w-12 h-12" href={`/user/12`}>
                <img
                  className="rounded-full w-12 h-12"
                  src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
                  alt=""
                />
              </Link>
            </div>
             <p className="pr-2 bg-gradient text-xs rounded-r-full py-1 pl-3 -ml-2 z-10 sm:text-sm font-bold"> $1000</p>
            </div>
          </div>
           <Link
           href={"/auth/login"}
           className="bg-gradient text-white px-4 py-1 rounded-full"
         >
           Login
         </Link>
         </>
        ) : (
          <Link
              href={"/auth/login"}
              className="bg-gradient text-white px-4 py-1 rounded-full"
            >
              Login
            </Link>
        )}
      </div>
    </div>
      <Drawer />
    </>
  );
}

export default Navbar;
