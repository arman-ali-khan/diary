import ReadLayout from "@/Layout/ReadLayout";
import Reviews from "@/components/Sections/Comments/Reviews";
import ReadBottomBar from "@/components/shared/ReadBottomBar";
import ReadingHeader from "@/components/shared/ReadingHeader";
import ProgressBar from "@/lib/ProgressBar";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { useSelector } from 'react-redux';
import { RemoveScroll } from "react-remove-scroll";

function readId() {
  // redux
  const storyState = useSelector((state)=>state.storyState)
  console.log(storyState,'story');
  // toggle
  const [showReview, setShowReview] = useState(false);
  // height
  const [height, setHeight] = useState(400);
  // is scroll

  const handleWheel = (event) => {
    // Access event.deltaY to determine the direction of the wheel scroll
    const scrollDirection =
      event.deltaY > 0
        ? height < 600
          ? setHeight(height + 40)
          : ""
        : height >= 400
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
      console.log(event, "envent");
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


    //  hide header and bottom bar
    const [show, setShow] = useState(true);
    let lastScrollY = 0;
  
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // If the scroll is going down, hide the navbar
        setShow(false);
      } else {
        // If the scroll is going up, show the navbar
        setShow(true);
      }
      lastScrollY = window.scrollY;
    };
  
    useEffect(() => {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }, [lastScrollY]);

  return (
    <ReadLayout>
       <ReadingHeader show={show}/>
      <section
        className="max-h-[200vh] relative mt-14 mb-44 bg-base-100 h-full min-h-[100%]"
      >
        <ProgressBar />
        <div
          onCopy={(e) => {
            e.preventDefault();
            toast.error("Copy don't allowed");
          }}
          className="h-full px-3 sm:px-4 relative md:px-5 lg:px-6 w-full max-w-3xl mx-auto"
        >
          {showOverlay && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "black",
                zIndex: 9999,
              }}
            />
          )}
          <div className={``} style={{ fontSize: storyState?.fontSize }}>
            {`আজ নীলের জন্মদিন। নীল আমার মেজোকাকুর ছেলে। ভালো নাম অন্রদীপ। ক্লাস ফোরে পড়ে। আমার

ক্লাস ফাইভ। ছোটোকাকুর মেয়ে মউ। ওর ভালো নাম তনুশ্ী। ওর সবে ক্লাস টু। আমরা তিনজন বসার ঘরে

জমজমাট। নীলের প্রতিটা জন্মদিনে একটা-না-একটা ধুন্ধুমার কাণ্ড হয়। সে খাওয়া-দাওয়াতেই হোক বা

অনুষ্ঠানের আয়োজনেই হোক। আর মেজোকাকুর মাথায় আসেও নানা অবাক করা আইডিয়া

 

একবার আমার জন্মদিনে বাড়িতেই বসিয়েছিলেন ম্যাজিকের আসর। মঞ্চ তৈরি করে, আলোর ঝিকিমিকি

লাগিয়ে সে কী কাণ্ড! সেবার মেজোকাকুর বন্ধু ম্যাজিশিয়ান অভিষেককাকু বিকেলেই বাড়িতে হাজির পুরো

টিম নিয়ে। অভিষেককাকু মেজোকাকুর সঙ্গে কলেজে পড়তেন। এখন ম্যাজিশিয়ান হিসেবে বেশ নামডাক।

তিনি কাগজ ভাঁজ করে কেমন দুটো পায়রা করে দিলেন। আমাকে একটা মুরগির কাঁচা ডিম দু-হাতে মুঠো

করতে বললেন। তারপর সেটা খেয়ে ফেলতে বললেন। আমি তো খাবই না। মঞ্চে প্রায় কেদে ফেলি আর

কি! তখন ম্যাজিককাকু বললেন, 'ঠিক আছে। এবার মুঠো খুলে দেখো তোমার হাতে কী?' আমি ভয়ে ভয়ে

হাত খুলে দেখি, আমার হাতে একটা মস্ত বড়ো সন্দেশ।

 

আমি নীলের কথাটা কিছুতেই বিশ্বাস করতে পারলাম না। ও কথা বিশ্বাস করা যায় না। মেজোকাকু একটা
ক্লাস ফাইভ। ছোটোকাকুর মেয়ে মউ। ওর ভালো নাম তনুশ্ী। ওর সবে ক্লাস টু। আমরা তিনজন বসার ঘরে

জমজমাট। নীলের প্রতিটা জন্মদিনে একটা-না-একটা ধুন্ধুমার কাণ্ড হয়। সে খাওয়া-দাওয়াতেই হোক বা

অনুষ্ঠানের আয়োজনেই হোক। আর মেজোকাকুর মাথায় আসেও নানা অবাক করা আইডিয়া

 

একবার আমার জন্মদিনে বাড়িতেই বসিয়েছিলেন ম্যাজিকের আসর। মঞ্চ তৈরি করে, আলোর ঝিকিমিকি

লাগিয়ে সে কী কাণ্ড! সেবার মেজোকাকুর বন্ধু ম্যাজিশিয়ান অভিষেককাকু বিকেলেই বাড়িতে হাজির পুরো

টিম নিয়ে। অভিষেককাকু মেজোকাকুর সঙ্গে কলেজে পড়তেন। এখন ম্যাজিশিয়ান হিসেবে বেশ নামডাক।

তিনি কাগজ ভাঁজ করে কেমন দুটো পায়রা করে দিলেন। আমাকে একটা মুরগির কাঁচা ডিম দু-হাতে মুঠো

করতে বললেন। তারপর সেটা খেয়ে ফেলতে বললেন। আমি তো খাবই না। মঞ্চে প্রায় কেদে ফেলি আর

কি! তখন ম্যাজিককাকু বললেন, 'ঠিক আছে। এবার মুঠো খুলে দেখো তোমার হাতে কী?' আমি ভয়ে ভয়ে

হাত খুলে দেখি, আমার হাতে একটা মস্ত বড়ো সন্দেশ।

 

আমি নীলের কথাটা কিছুতেই বিশ্বাস করতে পারলাম না। ও কথা বিশ্বাস করা যায় না। মেজোকাকু একটা
ক্লাস ফাইভ। ছোটোকাকুর মেয়ে মউ। ওর ভালো নাম তনুশ্ী। ওর সবে ক্লাস টু। আমরা তিনজন বসার ঘরে

জমজমাট। নীলের প্রতিটা জন্মদিনে একটা-না-একটা ধুন্ধুমার কাণ্ড হয়। সে খাওয়া-দাওয়াতেই হোক বা

অনুষ্ঠানের আয়োজনেই হোক। আর মেজোকাকুর মাথায় আসেও নানা অবাক করা আইডিয়া

 

একবার আমার জন্মদিনে বাড়িতেই বসিয়েছিলেন ম্যাজিকের আসর। মঞ্চ তৈরি করে, আলোর ঝিকিমিকি

লাগিয়ে সে কী কাণ্ড! সেবার মেজোকাকুর বন্ধু ম্যাজিশিয়ান অভিষেককাকু বিকেলেই বাড়িতে হাজির পুরো

টিম নিয়ে। অভিষেককাকু মেজোকাকুর সঙ্গে কলেজে পড়তেন। এখন ম্যাজিশিয়ান হিসেবে বেশ নামডাক।

তিনি কাগজ ভাঁজ করে কেমন দুটো পায়রা করে দিলেন। আমাকে একটা মুরগির কাঁচা ডিম দু-হাতে মুঠো

করতে বললেন। তারপর সেটা খেয়ে ফেলতে বললেন। আমি তো খাবই না। মঞ্চে প্রায় কেদে ফেলি আর

কি! তখন ম্যাজিককাকু বললেন, 'ঠিক আছে। এবার মুঠো খুলে দেখো তোমার হাতে কী?' আমি ভয়ে ভয়ে

হাত খুলে দেখি, আমার হাতে একটা মস্ত বড়ো সন্দেশ।

 

আমি নীলের কথাটা কিছুতেই বিশ্বাস করতে পারলাম না। ও কথা বিশ্বাস করা যায় না। মেজোকাকু একটা
ক্লাস ফাইভ। ছোটোকাকুর মেয়ে মউ। ওর ভালো নাম তনুশ্ী। ওর সবে ক্লাস টু। আমরা তিনজন বসার ঘরে

জমজমাট। নীলের প্রতিটা জন্মদিনে একটা-না-একটা ধুন্ধুমার কাণ্ড হয়। সে খাওয়া-দাওয়াতেই হোক বা

অনুষ্ঠানের আয়োজনেই হোক। আর মেজোকাকুর মাথায় আসেও নানা অবাক করা আইডিয়া

 

একবার আমার জন্মদিনে বাড়িতেই বসিয়েছিলেন ম্যাজিকের আসর। মঞ্চ তৈরি করে, আলোর ঝিকিমিকি

লাগিয়ে সে কী কাণ্ড! সেবার মেজোকাকুর বন্ধু ম্যাজিশিয়ান অভিষেককাকু বিকেলেই বাড়িতে হাজির পুরো

টিম নিয়ে। অভিষেককাকু মেজোকাকুর সঙ্গে কলেজে পড়তেন। এখন ম্যাজিশিয়ান হিসেবে বেশ নামডাক।

তিনি কাগজ ভাঁজ করে কেমন দুটো পায়রা করে দিলেন। আমাকে একটা মুরগির কাঁচা ডিম দু-হাতে মুঠো

করতে বললেন। তারপর সেটা খেয়ে ফেলতে বললেন। আমি তো খাবই না। মঞ্চে প্রায় কেদে ফেলি আর

কি! তখন ম্যাজিককাকু বললেন, 'ঠিক আছে। এবার মুঠো খুলে দেখো তোমার হাতে কী?' আমি ভয়ে ভয়ে

হাত খুলে দেখি, আমার হাতে একটা মস্ত বড়ো সন্দেশ।

 

আমি নীলের কথাটা কিছুতেই বিশ্বাস করতে পারলাম না। ও কথা বিশ্বাস করা যায় না। মেজোকাকু একটা
ক্লাস ফাইভ। ছোটোকাকুর মেয়ে মউ। ওর ভালো নাম তনুশ্ী। ওর সবে ক্লাস টু। আমরা তিনজন বসার ঘরে

জমজমাট। নীলের প্রতিটা জন্মদিনে একটা-না-একটা ধুন্ধুমার কাণ্ড হয়। সে খাওয়া-দাওয়াতেই হোক বা

অনুষ্ঠানের আয়োজনেই হোক। আর মেজোকাকুর মাথায় আসেও নানা অবাক করা আইডিয়া

 

একবার আমার জন্মদিনে বাড়িতেই বসিয়েছিলেন ম্যাজিকের আসর। মঞ্চ তৈরি করে, আলোর ঝিকিমিকি

লাগিয়ে সে কী কাণ্ড! সেবার মেজোকাকুর বন্ধু ম্যাজিশিয়ান অভিষেককাকু বিকেলেই বাড়িতে হাজির পুরো

টিম নিয়ে। অভিষেককাকু মেজোকাকুর সঙ্গে কলেজে পড়তেন। এখন ম্যাজিশিয়ান হিসেবে বেশ নামডাক।

তিনি কাগজ ভাঁজ করে কেমন দুটো পায়রা করে দিলেন। আমাকে একটা মুরগির কাঁচা ডিম দু-হাতে মুঠো

করতে বললেন। তারপর সেটা খেয়ে ফেলতে বললেন। আমি তো খাবই না। মঞ্চে প্রায় কেদে ফেলি আর

কি! তখন ম্যাজিককাকু বললেন, 'ঠিক আছে। এবার মুঠো খুলে দেখো তোমার হাতে কী?' আমি ভয়ে ভয়ে

হাত খুলে দেখি, আমার হাতে একটা মস্ত বড়ো সন্দেশ।

 

আমি নীলের কথাটা কিছুতেই বিশ্বাস করতে পারলাম না। ও কথা বিশ্বাস করা যায় না। মেজোকাকু একটা

কিছু করেবনই।`}
          </div>
          {/* Post footer */}
        <div className="flex justify-center">
        <ReadBottomBar show={show} />
        </div>
          {/* Rating */}

          <RemoveScroll>
          <div className="flex z-50 justify-center w-full">
            <div className="">
              {/* Page content here */}
              <button data-tip='Create review'
                onClick={() => setShowReview(true)}
                className="bg-gradient fixed bottom-3 right-12 z-50  rounded-full tooltip tooltip-open cursor-pointer text-white px-2 py-1 gap-1 flex text-xl items-center"
              >
                <BsStarHalf />
              </button>
            </div>
            <div
              onWheel={handleWheel}
              style={{ height: height, bottom: showReview ? 0 : -height }}
              className={`fixed z-50 duration-300 w-full bg-base-100`}
            >
              {/* Hide review */}
              <button
                hidden={!showReview}
                onClick={() => setShowReview(false)}
                className="fixed top-0 left-0 w-screen h-screen -z-50"
              ></button>
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
            </RemoveScroll>
        </div>
      </section>
    </ReadLayout>
  );
}

export default readId;
