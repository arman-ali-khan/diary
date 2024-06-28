import Layout from "@/Layout/Layout";
import Story from "@/components/Home/Stories/Story";
import Pagination from "@/components/Pagination/Pagination";
import SkeletonStory from "@/components/Spinner/SkeletonStory";
import { useGetStoryQuery } from "@/redux/features/api/storyApi";
const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12',
  ];
function CategoryId() {
  const {isError,isFetching,isLoading,isSuccess,data:stories,error} = useGetStoryQuery('/photos')
    return (
      <Layout>
      {/* category banner */}
      <div className="">
      <div className="relative">
            <img
              className="h-44 sm:h-56 rounded-t-xl md:h-72 lg:h-96 object-cover max-h-full min-h-full w-full"
              src={'/images/horror.png'}
            />
            <div className="absolute flex justify-center w-full top-[10%]  md:top-[30%] mx-auto">
              <div className="text-center max-w-[700px] md:p-7 p-3 sm:p-5 backdrop-blur-2xl backdrop-saturate-50 backdrop-brightness-125 backdrop-contrast-125">
                <h2 style={{textShadow:'2px 1px 2px black'}} className="text-sm sm:text-base md:text-4xl text-red-600 font-bold shadow-white drop-shadow-2xl hover:underline duration-300">
                ভৌতিক গল্প
                </h2>
                <p style={{textShadow:'2px 1px 2px black'}} className="text-blue-600 leading-4 md:leading-5 my-1 md:my-4 drop-shadow-lg text-xs sm:text-sm md:text-2xl">
                 গায়ে শিহরণ দেয়ার মত ভৌতিক গল্প গুলো পড়ুন । 
                </p>
                {/* <Link
                  className="bg-gradient text-xs sm:text-sm md:text-base md:px-4 px-2 md:py-2 rounded-full text-white"
                  href={data?.link}
                >
                  {data?.linkBody}
                </Link> */}
              </div>
            </div>
          </div>
      </div>
          <section className="relative -mt-12 container mx-auto">
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
       {
           isFetching ? [...Array(6).keys()]?.map((i)=>{ return <SkeletonStory />}) 
           :
            stories?.slice(0,12)?.map((story,i)=>{
                return    <Story key={i} story={story} />
            })
        }
       </div>
       <Pagination />
       </section>
      </Layout>
    );
}

export default CategoryId;

