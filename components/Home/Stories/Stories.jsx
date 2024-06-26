'use client'
import Story from "./Story";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import Link from "next/link";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Navigation } from 'swiper/modules';
import { useGetStoryQuery } from "@/redux/features/api/storyApi";
import SkeletonStory from "@/components/Spinner/SkeletonStory";

function Stories() {
  const {isError,isFetching,isLoading,isSuccess,data:stories,error} = useGetStoryQuery()
    return (
       <section className="relative container mx-auto">
        <div className="bg-base-300 flex items-center border-t-2 rounded-t-md border-[darkorchid] mb-2 justify-between px-2 md:px-4 mt-6">
          <Link href={`/category/12`} className="text-sm md:py-3 px-4 py-2 font-[SolaimanLipi] font-bold sm:text-lg md:text-xl lg:text-2xl">ভৌতিক গল্প</Link>
          <Link href={`/category/12`} className="px-5 inline-block md:py-3 py-2">
          <MdOutlineDoubleArrow />
          </Link>
        </div>
         <Swiper
        slidesPerView={2}
        spaceBetween={2}
        navigation={true}
        breakpoints={{
          360: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
           640: {
            slidesPerView: 4,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
          1248: {
            slidesPerView: 5,
            spaceBetween: 3,
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {  isLoading || isFetching ?[...Array(6).keys()]?.map((i)=>{ return <SwiperSlide key={i}> <SkeletonStory />
                </SwiperSlide>}) 
                :
           stories?.map((i,story)=>{
                return   <SwiperSlide> <Story story={story} key={i} />
                </SwiperSlide>
            })
        }
        </Swiper>
       </section>
    );
}

export default Stories;