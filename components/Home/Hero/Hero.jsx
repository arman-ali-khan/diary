// Import Swiper React components
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import React from "react";
import { Autoplay, Pagination } from 'swiper/modules';

function Hero() {
  const [swiper, setSwiper] = React.useState(null);

  React.useEffect(() => {
    if (swiper) {
      swiper.slideTo(4);
    }
  }, [swiper]);

  // fake data
  const fakeData =  [
    {
    id:1,
    title:'আমার সোনার বাংলা আমি তোমায় ভালোবাসি ।',
    description:`আমার সোনার বাংলা, আমি তোমায় ভালোবাসি। চিরদিন তোমার আকাশ,
    তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি॥ ও মা, ফাগুনে তোর আমের
    বনে ঘ্রাণে পাগল করে, মরি হায়, হায় রে— ও মা, অঘ্রানে তোর ভরা
    ক্ষেতে আমি কী দেখেছি মধুর হাসি॥`,
    link:'/auth/login',
    linkBody:'Login'
  },
    {
    id:1,
    title:'আমার সোনার বাংলা আমি তোমায় ভালোবাসি ।',
    description:`আমার সোনার বাংলা, আমি তোমায় ভালোবাসি। চিরদিন তোমার আকাশ,
    তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি॥ ও মা, ফাগুনে তোর আমের
    বনে ঘ্রাণে পাগল করে, মরি হায়, হায় রে— ও মা, অঘ্রানে তোর ভরা
    ক্ষেতে আমি কী দেখেছি মধুর হাসি॥`,
    link:'#',
    linkBody:'Get Start'
  },
    {
    id:1,
    title:'আমার সোনার বাংলা আমি তোমায় ভালোবাসি ।',
    description:`আমার সোনার বাংলা, আমি তোমায় ভালোবাসি। চিরদিন তোমার আকাশ,
    তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি॥ ও মা, ফাগুনে তোর আমের
    বনে ঘ্রাণে পাগল করে, মরি হায়, হায় রে— ও মা, অঘ্রানে তোর ভরা
    ক্ষেতে আমি কী দেখেছি মধুর হাসি॥`,
    link:'#',
    linkBody:'Get Start'
  },
    {
    id:1,
    title:'আমার সোনার বাংলা আমি তোমায় ভালোবাসি ।',
    description:`আমার সোনার বাংলা, আমি তোমায় ভালোবাসি। চিরদিন তোমার আকাশ,
    তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি॥ ও মা, ফাগুনে তোর আমের
    বনে ঘ্রাণে পাগল করে, মরি হায়, হায় রে— ও মা, অঘ্রানে তোর ভরা
    ক্ষেতে আমি কী দেখেছি মধুর হাসি॥`,
    link:'#',
    linkBody:'Get Start'
  },
    {
    id:1,
    title:'আমার সোনার বাংলা আমি তোমায় ভালোবাসি ।',
    description:`আমার সোনার বাংলা, আমি তোমায় ভালোবাসি। চিরদিন তোমার আকাশ,
    তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি॥ ও মা, ফাগুনে তোর আমের
    বনে ঘ্রাণে পাগল করে, মরি হায়, হায় রে— ও মা, অঘ্রানে তোর ভরা
    ক্ষেতে আমি কী দেখেছি মধুর হাসি॥`,
    link:'#',
    linkBody:'Get Start'
  },
    {
    id:1,
    title:'আমার সোনার বাংলা আমি তোমায় ভালোবাসি ।',
    description:`আমার সোনার বাংলা, আমি তোমায় ভালোবাসি। চিরদিন তোমার আকাশ,
    তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি॥ ও মা, ফাগুনে তোর আমের
    বনে ঘ্রাণে পাগল করে, মরি হায়, হায় রে— ও মা, অঘ্রানে তোর ভরা
    ক্ষেতে আমি কী দেখেছি মধুর হাসি॥`,
    link:'#',
    linkBody:'Get Start'
  },
    {
    id:1,
    title:'আমার সোনার বাংলা আমি তোমায় ভালোবাসি ।',
    description:`আমার সোনার বাংলা, আমি তোমায় ভালোবাসি। চিরদিন তোমার আকাশ,
    তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি॥ ও মা, ফাগুনে তোর আমের
    বনে ঘ্রাণে পাগল করে, মরি হায়, হায় রে— ও মা, অঘ্রানে তোর ভরা
    ক্ষেতে আমি কী দেখেছি মধুর হাসি॥`,
    link:'#',
    linkBody:'Get Start'
  },
    {
    id:1,
    title:'আমার সোনার বাংলা আমি তোমায় ভালোবাসি ।',
    description:`আমার সোনার বাংলা, আমি তোমায় ভালোবাসি। চিরদিন তোমার আকাশ,
    তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি॥ ও মা, ফাগুনে তোর আমের
    বনে ঘ্রাণে পাগল করে, মরি হায়, হায় রে— ও মা, অঘ্রানে তোর ভরা
    ক্ষেতে আমি কী দেখেছি মধুর হাসি॥`,
    link:'#',
    linkBody:'Get Start'
  },
]
  return (
    <div className="min-h-44 sm:min-h-56 md:min-h-72 lg:min-h-96 bg-base-200">
      <Swiper loop={true}   autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }} onSwiper={(s) => {
          setSwiper(s);
        }}  pagination={true} modules={[Pagination,Autoplay]} className="mySwiper">
        {
          fakeData?.map((data,i)=>{
            return <SwiperSlide key={i}>
          <div className="relative">
            <img
              className="h-44 sm:h-56 md:h-72 lg:h-96 object-cover max-h-full min-h-full w-full"
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            />
            <div className="absolute flex justify-center w-full top-[10%]  md:top-[30%] mx-auto">
              <div className="text-center max-w-[700px] md:p-7 p-3 sm:p-5 backdrop-blur-2xl backdrop-saturate-50 backdrop-brightness-125 backdrop-contrast-125">
                <h2 className="text-sm sm:text-base md:text-2xl text-zinc-900 font-bold shadow-white drop-shadow-2xl hover:underline duration-300 heading">
                  {data?.title}
                </h2>
                <p className="text-zinc-900 leading-4 md:leading-5 my-1 md:my-4 drop-shadow-lg hero-text text-xs sm:text-sm md:text-lg">
                  {data?.description?.split(' ').slice(0,20).join(' ')}
                </p>
                <Link
                  className="bg-gradient text-xs sm:text-sm md:text-base md:px-4 px-2 md:py-2 rounded-full text-white"
                  href={data?.link}
                >
                  {data?.linkBody}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
}

export default Hero;
