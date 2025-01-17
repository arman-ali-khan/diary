import Link from "next/link";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { IoBookmarkOutline, IoCloseCircleOutline } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { PiWifiXBold } from "react-icons/pi";
import { RiHome2Line, RiStarSFill } from "react-icons/ri";

function BottomBar() {
  // active btn
  const [active, setActive] = useState("1");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Load the theme from local storage
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // hide notification
  const handleHideNotification = () => {
    document.getElementsByTagName("details")[0].removeAttribute("open");
  };

  return (
    <section className="flex justify-center">
      <section className="fixed z-50 max-w-96 mx-auto bg-gradient rounded-t-xl sm:rounded-full bottom-0 sm:bottom-2 md:bottom-4 w-full p-0.5">
        <div className="flex items-center rounded-t-xl sm:rounded-full bg-base-100 justify-center">
          {/* dark and light */}
          <label
            className={`active w-full flex justify-center items-center flex-col py-1 border-r border-black`}
            href={`#`}
          >
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onClick={() => toggleTheme()}
                defaultChecked={theme !== "light"}
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </label>
          {/* Notifications */}
          <details className="dropdown dropdown-top relative">
            <summary
              className={`active w-full px-5 cursor-pointer select-none flex justify-center items-center flex-col py-1 border-r border-black`}
              href={`#`}
            >
              <LuBell className="text-xl" />
              <span className="text-[8px]">Notify</span>
            </summary>
            <ul className="relative dropdown-content bg-base-100 rounded border-2 z-[1] w-72 max-w-96 min-w-max h-96 min-h-72 p-2 shadow">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Notifications</h2>
                <button
                  onClick={() => handleHideNotification()}
                  className="absolute hover:text-rose-400 text-2xl right-0 top-0 px-2 py-2 rounded-full z-30 cursor-pointer"
                >
                  <IoCloseCircleOutline />
                </button>
              </div>
              <li className="px-1 flex shadow-xl flex-col hover:bg-base-200 gap-1">
               <div className="flex items-center truncate gap-2 py-1">
                 <span><FcLike /></span>
                <Link href={`#`} className="flex items-center gap-2"><span className="text-blue-300 font-bold">@samrat</span> likes your story</Link>
               </div>
               <div>
                <p className="text-xs">3 hours ago</p>
               </div>
              </li>
              {/* review */}
              <li className="px-1 flex shadow-xl hover:bg-base-200 flex-col gap-1">
              <div className="flex items-center truncate gap-2 py-1">
                  <span><RiStarSFill className="text-yellow-600" /></span>
                <Link href={`#`} className="flex items-center gap-2"><span className="text-blue-300 font-bold">@samrat</span> review your story</Link>
              </div>
              <div>
                <p className="text-xs">3 hours ago</p>
              </div>
              </li>
              {/* follow  story*/}
              <li className="px-1 flex shadow-xl hover:bg-base-200 flex-col gap-1">
              <div className="flex items-center truncate gap-2 py-1">
                  <span><PiWifiXBold className="text-red-400 rotate-45" /></span>
                <Link href={`#`} className="flex items-center gap-2"><span className="text-blue-300 font-bold">@samrat</span> follow your story</Link>
              </div>
              <div>
                <p className="text-xs">3 hours ago</p>
              </div>
              </li>
              {/* follow user */}
              <li className="px-1 flex shadow-xl hover:bg-base-200 flex-col gap-1">
              <div className="flex items-center truncate gap-2 py-1">
                  <span><PiWifiXBold className="text-red-400 rotate-45" /></span>
                <Link href={`#`} className="flex items-center gap-2"><span className="text-blue-300 font-bold">@samrat</span> follow you</Link>
              </div>
              <div>
                <p className="text-xs">3 hours ago</p>
              </div>
              </li>
            </ul>
          </details>
          {/* Home */}
          <Link
            className={`active w-full flex justify-center items-center flex-col py-1 border-r border-black`}
            href={`/`}
          >
            <RiHome2Line className="text-xl" />
            <span className="text-[8px]">Home</span>
          </Link>
          {/* Saved */}
          <Link
            className={`active w-full flex justify-center items-center flex-col py-1 border-r border-black`}
            href={`/user/12?tab=saved`}
          >
            <IoBookmarkOutline className="text-xl" />
            <span className="text-[8px]">Saved</span>
          </Link>
          {/* Profile */}
          <Link
            className={`active w-full flex justify-center items-center flex-col py-1`}
            href={`/user/12`}
          >
            <CgProfile className="text-xl" />
            <span className="text-[8px]">Profile</span>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default BottomBar;
