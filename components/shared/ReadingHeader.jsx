import Link from "next/link";
import { useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import {
  CgArrowLeft,
  CgMusic,
  CgPlayButtonO,
  CgPlayPauseO,
  CgSun,
} from "react-icons/cg";
import { GiSunglasses } from "react-icons/gi";
import { SlVolumeOff } from "react-icons/sl";
import { TbMinus, TbPlus } from "react-icons/tb";

function ReadingHeader({ font, setFont,bg, setBg }) {

  // song play
  const [play, setPlay] = useState(false);

  return (
    <nav style={{backgroundColor:bg===1 && 'wheat'||bg===0 && ''||bg===2 && 'darkblue',color:bg===1 && 'black'||bg===0 && 'black'||bg===2 && 'white'}} className="w-full px-4 sticky top-0 h-12 flex items-center justify-between bg-base-300 mb-3">
      <div className="flex items-center gap-2 w-full max-w-xs">
        <Link className="px-4 py-2 inline-block" href={"/"}>
          <CgArrowLeft />
        </Link>
        <select className="px-4 bg-transparent py-2 w-full max-w-xs">
          <option disabled selected>
            Small
          </option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
      </div>

      {/* Story */}
      <div className="flex items-center gap-4">
        {/* Color */}
        <div className="flex items-center select-none gap-2">
          {/* Sun */}
          {bg === 0 && (
            <CgSun
              size={25}
              onClick={() => setBg(1)}
              className="fill-current cursor-pointer w-6 h-6"
            />
          )}
          {/* Night */}
          {bg === 1 && (
            <GiSunglasses
              size={25}
              onClick={() => setBg(2)}
              className="fill-current cursor-pointer w-8 h-8"
            />
          )}
          {/* moon icon */}
          {bg === 2 && (
            <BsMoonStars
              size={25}
              onClick={() => setBg(0)}
              className="fill-current cursor-pointer w-6 h-6"
            />
          )}
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

        <div className="flex items-center flex-row-reverse gap-1">
          <button  disabled={font >=45} onClick={() => setFont(font + 3)}>
            <TbPlus size={22} />
          </button>
          {font}
          <button disabled={font<=15} onClick={() => setFont(font - 3)}>
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
