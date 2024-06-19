import { convertToBengaliNumber } from "@/lib/convertToBengaliNumber";
import Link from "next/link";

function StoryEdit() {
  return (
   <section className="flex w-full">
     <div className="card-container min-w-48 max-h-96 max-w-56 w-64 relative">
        <div data-tip="Rating" className="rating gap-1 tooltip tooltip-left flex absolute top-3 z-4 right-3 bg-gradient text-white px-1 rounded-lg py-0.5 z-50 items-center">
     {convertToBengaliNumber(3.5)} <input type="radio" name="rating-3" className="mask text-xs w-4 inline-block mask-star bg-orange-400" checked />
</div>
      <div className="card card-compact border rounded-lg w-full shadow-xl">
      <Link href={`/create/part/123`} className="rounded-t-lg overflow-hidden">
        <figure>
          <img
          className="h-72 object-cover w-full"
            src="https://static-assets.pratilipi.com/pratilipi_premium/data/135959/cover_image/135959.jpg?quality=high&type=webp"
            alt="Shoes"
          />
        </figure></Link>
        <div className="card-body mt-1 !p-0 mb-2 !gap-0">
          <Link href={`/story/12/123`}>
          <h2 style={{lineHeight:'22px',marginTop:'5px'}} data-tip="ভালোবাসার মানুষ" className="card-title font-[SolaimanLipi] tooltip flex justify-start text-left text-base py-0 sm:text-base md:text-lg lg:text-lg !px-1 !m-0">{'ভালোবাসার মানুষ'.slice(0,50)+'...'}</h2>
          </Link>
          <div className="flex text-base-content items-center justify-between w-full">
          <p className="text-xs py-0 sm:text-base md:text-lg lg:text-lg !px-1 !m-0">13 ঘণ্টা</p>
          <p  className="text-xs py-0 sm:text-base md:text-lg lg:text-lg !px-1 !m-0">পড়েছেন ৪৫লা +</p>
          </div>
        </div>
      </div>
      </div>
     
   </section>
  );
}

export default StoryEdit;

