import { convertToBengaliNumber } from "@/lib/convertToBengaliNumber";
import Link from "next/link";

function SingleAudio({story}) {
  return (
    <section className="card-container w-full relative">
        <div data-tip="Rating" className="rating gap-1 tooltip tooltip-left flex absolute top-3 z-4 right-3 bg-gradient text-white px-1 rounded-lg py-0.5 z-50 items-center">
     {convertToBengaliNumber(3.5)} <input type="radio" name="rating-3" className="mask text-xs w-4 inline-block mask-star bg-orange-400" defaultChecked />
</div>
      <div className="card card-compact border rounded-lg w-full shadow-xl">
      <Link href={`/story/12`} className="rounded-t-lg overflow-hidden">
        <figure>
          <img
          className="h-44 sm:h-56 md:h-72 object-cover w-full"
            src={story?.thumbnailUrl}
            alt={story?.title}
          />
        </figure></Link>
        <div className="card-body mt-1 !p-0 mb-2 !gap-0">
          <Link className="truncate" href={`/story/12`}>
          <p style={{lineHeight:'22px',marginTop:'5px'}} data-tip={story?.title} className="card-title w-full truncate tooltip flex justify-start text-left text-sm py-0 sm:text-base md:text-lg lg:text-lg !px-1 !m-0">{`${story?.title||'Story Title'}`}</p>
          </Link>
          <div className="flex text-base-content items-center justify-between w-full text-center">
          <p className="text-xs py-0 sm:text-base md:text-sm lg:text-sm !px-1 !m-0">13 ঘণ্টা</p>
          <p  className="text-xs py-0 sm:text-base md:text-sm lg:text-sm !px-1 !m-0">পড়েছেন ৪৫লা +</p>
          </div>
        </div>
      </div>
      </section>
  );
}

export default SingleAudio;
