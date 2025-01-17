import Pagination from "@/components/Pagination/Pagination";
import SkeletonStory from "@/components/Spinner/SkeletonStory";
import { useGetStoriesQuery } from "@/redux/features/api/storyApi";
import Hero from "../Home/Hero/Hero";
import SingleAudio from "./SingleAudio";

function Audios() {
  const {isError,isFetching,isLoading,isSuccess,data:stories,error} = useGetStoriesQuery('')

    return (
      <>
      {/* category banner */}
      <div className="">
      <div className="relative overflow-hidden rounded-t-xl border">
    <Hero />
          </div>
      </div>
          <section className="relative mt-12 container mx-auto">
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
       {
           isFetching ? [...Array(6).keys()]?.map((i)=>{ return <SkeletonStory key={i} />}) 
           :
            stories?.slice(0,12)?.map((story,i)=>{
                return    <SingleAudio key={i} story={story} />
            })
        }
       </div>
       <Pagination />
       </section>
      </>
    );
}

export default Audios;

