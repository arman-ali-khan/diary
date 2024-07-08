import PricingModal from "@/components/shared/PricingModal";
import { convertToBengaliNumber } from "@/lib/convertToBengaliNumber";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { CgLock } from "react-icons/cg";
import { FaEye, FaStarHalfAlt } from "react-icons/fa";
import { TbHeart } from "react-icons/tb";
import { TfiLayoutListLargeImage } from "react-icons/tfi";
function Card({ part,id }) {

  // router
  const router = useRouter()
  const pathId = router.asPath;
  const storyId = pathId?.split("/")[2];

  console.log(storyId,'pathId');
  return (
   <div>
   {id <= 3 ? 
   <Link href={`/read/${storyId}/${part?.id}`}>
    <div
      className="flex w-full items-center rounded-md gap-2 px-2 bg-base-100 bg-opacity-70 shadow-xl"
    >
      <div className="w-24 flex items-center justify-center relative">
        <p className="absolute text-sm md:text-base lg:text-lg 2xl:text-xl pr-5 bengali text-[darkorchid]">
          {convertToBengaliNumber(id)}
        </p>
        <TfiLayoutListLargeImage className="svg-card text-[70px] md:text-[80px] lg:text-[110px]" />
      </div>
      <div className="flex flex-col space-y-2 w-full">
        <h2 className="card-title items-center flex justify-between text-base md:text-base">
          <p className="flex items-center gap-1 truncate">
            {part?.title}
           {
            id >= 4 &&  <CgLock
              size={23}
              className="bg-gradient text-white mask mask-squircle px-0.5"
            />
           }
          </p>
          <p className="text-xs md:text-base font-thin truncate">{moment(part?.created_at).fromNow()} </p>
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
    </Link>:
    <button className="w-full" onClick={()=>document.getElementById('pricing').showModal()}>
    <div
      className="flex w-full items-center rounded-md gap-2 px-2 bg-base-100 bg-opacity-70 shadow-xl"
    >
      <div className="w-24 flex items-center justify-center relative">
        <p className="absolute text-sm md:text-base lg:text-lg 2xl:text-xl pr-5 bengali text-[darkorchid]">
          {convertToBengaliNumber(id)}
        </p>
        <TfiLayoutListLargeImage className="svg-card text-[70px] md:text-[80px] lg:text-[110px]" />
      </div>
      <div className="flex flex-col space-y-2 w-full">
        <h2 className="card-title items-center flex justify-between text-base md:text-base">
          <p className="flex items-center gap-1 truncate">
            {part?.title}
           {
            id >= 4 &&  <CgLock
              size={23}
              className="bg-gradient text-white mask mask-squircle px-0.5"
            />
           }
          </p>
          <p className="text-xs md:text-base font-thin truncate">{moment(part?.created_at).fromNow()} </p>
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
    </button>}
    <PricingModal />
   </div>
  );
}

export default Card;
