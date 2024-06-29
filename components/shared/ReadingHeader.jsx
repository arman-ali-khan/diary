import { setFont } from "@/redux/features/story/storyStateSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CgArrowLeft,
  CgMusic,
  CgPlayButtonO,
  CgPlayPauseO
} from "react-icons/cg";
import { SlVolumeOff } from "react-icons/sl";
import { TbMinus, TbPlus } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';

function ReadingHeader() {
// redux
const storyState = useSelector((state)=>state.storyState)
const dispatch = useDispatch()
  // song play
  const [play, setPlay] = useState(false);
  const [toggle, setToggle] = useState('');
  
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Load the theme from local storage
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="w-full px-4 sticky top-0 h-12 flex items-center justify-between bg-base-300 mb-3">
      <div className="flex items-center gap-2 w-full max-w-xs">
        <Link className="px-4 py-2 inline-block" href={"/"}>
          <CgArrowLeft />
        </Link>
        <div className="">
        <select defaultValue={'3'} id="styledSelect" className="select rounded-none sm:w-56 max-w-sm bg-base-200">
          <option disabled value="0">
            All Story Parts:
          </option>
          <option value="1">Part 1</option>
          <option value="2">Part 2</option>
          <option value="3">Part 3</option>
          <option value="4">Part 4</option>
          <option value="5">Part 5</option>
        </select>
</div>
      </div>

      {/* Story */}
      <div className="flex items-center gap-4">
        {/* Color */}
        <div className="flex items-center select-none gap-2">
          {/* Sun */}
          <label className="grid cursor-pointer place-items-center">
  <input onClick={()=>toggleTheme()}
    type="checkbox"
    defaultChecked={theme!=='light'}
    value="synthwave"
    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
        </div>
        <div className="p-0 m-0 flex items-center">
          {/* Music */}

          <div className="dropdown dropdown-bottom dropdown-left">
            <div tabIndex={0} role="button" className="">
                {/* Music btn */}
                {
                    play ?   <CgMusic className="fill-current w-6 h-6" />:<SlVolumeOff className="fill-current w-6 h-6" />
                }
             
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full min-w-80 max-w-96 overflow-hidden pr-4"
            >
              {[...Array(12).keys()].map((item, i) => {
                return (
                  <div
                    key={i}
                    className="py-2 hover:bg-base-200 rounded-md px-3 flex items-center gap-1"
                  >
                    <button onClick={() => setPlay(!play)}>
                      {play ? (
                        <CgPlayPauseO size={26} />
                      ) : (
                        <CgPlayButtonO size={26} />
                      )}
                    </button>{" "}
                    <p className="truncate">
                      Dustu Shoshur Mishty Jamai | দুষ্টু শ্বশুর মিষ্টি জামাই |
                      Niloy Alamgir | Heme | Eid Natok 2023
                    </p>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex items-center flex-row-reverse gap-3">
          <button  disabled={storyState?.fontSize >=33} onClick={() => dispatch(setFont(storyState?.fontSize + 3))}>
            <TbPlus size={22} />
          </button>
         <button onClick={() => dispatch(setFont(18))}> {storyState?.fontSize}</button>
          <button disabled={storyState?.fontSize<=15} onClick={() => dispatch(setFont(storyState?.fontSize - 3))}>
            <TbMinus size={22} />
          </button>
        </div>
      </div>
      {/* User */}
      <div className="w-10 h-10 rounded-full flex items-center bg-base-100">
        <div className="dropdown dropdown-left dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center justify-center"
          >
            <div className="avatar">
              <div className="w-full rounded-full border-4 border-primary border-offset-base-100 h-full border-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ReadingHeader;
