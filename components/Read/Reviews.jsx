import { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Reviews from "../Sections/Comments/Reviews";

function Comments() {
      // toggle
  const [showReview, setShowReview] = useState(false);
  // height
  const [height, setHeight] = useState(400);
  // is scroll

  const handleWheel = (event) => {
    // Access event.deltaY to determine the direction of the wheel scroll
    const scrollDirection =
      event.deltaY > 0
        ? height < 800
          ? setHeight(height + 40)
          : ""
        : height >= 600
        ? setHeight(height - 40)
        : "";

    // Your custom logic based on the scroll direction
    console.log("Wheel scrolled:", scrollDirection);
  };

  // rating
  const [stars, setStars] = useState(1);
// disable ss
const [showOverlay, setShowOverlay] = useState(false);

useEffect(() => {
  const handleKeyDown = (event) => {
    console.log(event,'envent')
    if (event.key === "PrintScreen") {
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
      }, 2000); // Hide the overlay after 2 seconds (adjust as needed)
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);
    return (
        <div className="flex justify-center w-full">
        <div className="">
          {/* Page content here */}
          <button
            onClick={() => setShowReview(true)}
            className="bg-gradient cursor-pointer text-white px-2 py-1 rounded gap-1 flex items-center"
          >
            <BsStarHalf /> রিভিউ তৈরী করুন
          </button>
        </div>
        <div
          onWheel={handleWheel}
          style={{ height: height, bottom: showReview ? 0 : -height }}
          className={`fixed z-50 duration-300 w-full bg-base-100`}
        >
          {/* Hide review */}
          <button hidden={!showReview} onClick={()=>setShowReview(false)} className="fixed top-0 left-0 w-screen h-screen -z-50"></button>
          <div className="bg-base-300 sticky top-0 flex items-center px-4 justify-between py-2 w-full">
            <h2 className="text-xl font-bold">রিভিউস সমূহ</h2>
            <button
              onClick={() => setShowReview(false)}
              className="cursor-pointer "
            >
              <CgClose size={26} />
            </button>
          </div>
          {/* Content */}
          <div className="container bg-base-100 mx-auto px-3 text-xl overflow-y-auto h-full pb-12 sm:px-5 md:px-6 ">
            {/* COmment box */}
            <div className="flex flex-col items-center">
              {/* Stars */}
              <div className="flex justify-center my-6 items-center cursor-pointer gap-1">
                <BsStarFill
                  onMouseEnter={() => setStars(1)}
                  onClick={() => setStars(1)}
                  className={`${
                    stars > 0 ? "fill-orange-400" : "fill-zinc-300"
                  }`}
                  size={34}
                />
                <BsStarFill
                  onMouseEnter={() => setStars(2)}
                  onClick={() => setStars(2)}
                  className={`${
                    stars > 1 ? "fill-orange-400" : "fill-zinc-300"
                  }`}
                  size={34}
                />
                <BsStarFill
                  onMouseEnter={() => setStars(3)}
                  onClick={() => setStars(3)}
                  className={`${
                    stars > 2 ? "fill-orange-400" : "fill-zinc-300"
                  }`}
                  size={34}
                />
                <BsStarFill
                  onMouseEnter={() => setStars(4)}
                  onClick={() => setStars(4)}
                  className={`${
                    stars > 3 ? "fill-orange-400" : "fill-zinc-300"
                  }`}
                  size={34}
                />
                <BsStarFill
                  onMouseEnter={() => setStars(5)}
                  onClick={() => setStars(5)}
                  className={`${
                    stars > 4 ? "fill-orange-400" : "fill-zinc-300"
                  }`}
                  size={34}
                />
              </div>
              <div className="w-full md:w-96 lg:w-[596px] gap-1 flex">
                <textarea className="px-4 py-2 w-full textarea bg-white h-full rounded border border-blue-600"></textarea>
                <button className="px-4 py-2 h-full rounded bg-gradient text-white">
                  Review
                </button>
              </div>
              {/* All Reviews */}
              <div className="flex justify-start w-full py-2 my-6 bg-base-200 rounded-md px-4">
                <h2 className="text-lg font-bold">অন্যান্য রিভিউ সমূহঃ</h2>
              </div>
              {/* Reviews */}
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Comments;