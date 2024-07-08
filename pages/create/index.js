import Layout from "@/Layout/Layout";
import StoryEdit from "@/components/Home/Stories/StoryEdit";
import SkeletonStory from "@/components/Spinner/SkeletonStory";
import Spinner from "@/components/Spinner/Spinner";
import useGetUser from "@/hooks/useGetUser";
import { useGetStoriesQuery } from "@/redux/features/api/storyApi";
import PrivateRoutes from "@/routes/privateRoutes";
import generateRandomId from "@/utils/randomId";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";

function index() {
  // router
  const router = useRouter()

  // get user
  const [user, isLoadingUser, isSuccessUser] = useGetUser();

  
  // create new story id and go to new story route
  const handleCreateStory = () =>{
    const id = generateRandomId()
     router.push(`/create/story/${id}`)
   }

   // get all storis
   const {isLoading:isLoadingStories,isSuccess:isSuccessStories,data:storiesData,refetch,isFetching:isFetchingStories} = useGetStoriesQuery()

   useEffect(()=>{
    refetch()
   },[isLoadingStories,isFetchingStories])
  return (
      <Layout title={"Create"}>
    <PrivateRoutes>
       {isLoadingUser ?<Spinner />:
        <section className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row w-full gap-3 mt-12 mb-12">
            {/* instruction */}
            <div className="w-full md:ml-12">
              <h2 className="font-bold text-xl">আমার গল্প গুলো</h2>
              {/* post box */}
              <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <div className="card-container flex justify-center items-center w-full relative rounded-t-lg overflow-hidden">
                  <a
                    className="card card-compact border rounded-lg w-full flex flex-col justify-center items-center h-full shadow-xl"
                    onClick={()=>handleCreateStory()}
                  >
                    <img
                      className="h-44 opacity-0 sm:h-56 md:h-72 object-cover w-full"
                      src={
                        "https://static-assets.pratilipi.com/pratilipi_premium/data/135959/cover_image/135959.jpg?quality=high&type=webp"
                      }
                    />
                    <div className="absolute">
                      <FaPlus size={55} />
                      <p>নতুন গল্প</p>
                    </div>
                  </a>
                </div>
                {isLoadingStories
                  ? [...Array(4).keys()]?.map((i) => {
                      return <SkeletonStory key={i} />;
                    })
                  : storiesData?.map((story, i) => {
                      return <StoryEdit story={story} key={i} />;
                    })}
              </section>
            </div>
          </div>
        </section>
       }
    </PrivateRoutes>
      </Layout>
  );
}

export default index;
