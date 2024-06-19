import { convertToBengaliNumber } from "@/lib/convertToBengaliNumber";
import Link from "next/link";
import { CgLock } from "react-icons/cg";
import { FaEye, FaStarHalfAlt } from "react-icons/fa";
import { TbHeart } from "react-icons/tb";
import { TfiLayoutListLargeImage } from "react-icons/tfi";
function Card({ i }) {
  return (
   <Link href={`/read/123/123`}>
    <div
      key={i}
      className="flex w-full items-center rounded-md gap-2 px-2 bg-base-100 shadow-xl"
    >
      <div className="w-24 flex items-center justify-center relative">
        <p className="absolute text-sm md:text-base lg:text-lg 2xl:text-xl pr-5 bengali text-[darkorchid]">
          {convertToBengaliNumber(i + 1)}
        </p>
        <TfiLayoutListLargeImage className="svg-card text-[darkblue] text-[70px] md:text-[80px] lg:text-[110px]" />
      </div>
      <div className="flex flex-col space-y-2 w-full">
        <h2 className="card-title items-center flex justify-between text-base md:text-base">
          <p className="flex items-center gap-1 truncate">
            প্রতাপগড়ের বৌরাণী{" "}
            <CgLock
              size={23}
              className="bg-gradient text-white mask mask-squircle px-0.5"
            />
          </p>
          <p className="text-xs md:text-base font-thin truncate">12 দি আগে </p>
        </h2>

        <div className="w-full pr-8 text-xs md:text-base">
          <p className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <FaEye />
              {convertToBengaliNumber(23)}লা+
            </span>
            <span className="flex items-center gap-1">
              <FaStarHalfAlt />
              {convertToBengaliNumber(5.3)}
            </span>
            <span className="flex items-center gap-1">
              <TbHeart />
              {convertToBengaliNumber(23)}লা+
            </span>
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Card;
