import { useGetStoryQuery } from "@/redux/features/api/storyApi";
import Story from "../Home/Stories/Story";
import Loading from "../Spinner/Loading";
import Spinner from "../Spinner/Spinner";



function UserStories() {
  const {isError,isFetching,isLoading,isSuccess,data:stories,error} = useGetStoryQuery()
  console.log(stories,'stories',isLoading,isError,error)
    return (
        <section className="relative w-full">
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
        { isFetching ? <Loading />:
          stories?.map((story,i)=>{
            return <Story story={story} key={i} />
          })
        }
        </div>
       </section>
    );
}

export default UserStories;