import Layout from "@/Layout/Layout";
import StoryEdit from "@/components/Home/Stories/StoryEdit";
import SkeletonStory from "@/components/Spinner/SkeletonStory";
import Spinner from "@/components/Spinner/Spinner";
import useGetUser from "@/hooks/useGetUser";
import { useGetStoryQuery } from "@/redux/features/api/storyApi";
import PrivateRoutes from "@/routes/privateRoutes";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

function index() {
  const {
    isError,
    isFetching,
    isLoading,
    isSuccess,
    data: stories,
    error,
  } = useGetStoryQuery("/photos");
  // get user
  const [user, isLoadingUser, isSuccessUser] = useGetUser();
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
                  <Link
                    className="card card-compact border rounded-lg w-full flex flex-col justify-center items-center h-full shadow-xl"
                    href={"/create/story/123"}
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
                  </Link>
                </div>
                {isFetching
                  ? [...Array(6).keys()]?.map((i) => {
                      return <SkeletonStory />;
                    })
                  : stories?.slice(0, 4)?.map((story, i) => {
                      return <StoryEdit story={story} key={i} />;
                    })}
              </section>
            </div>
            {/* aside */}
            {/* <aside className="w-96 max-w-fit min-w-56 space-y-2 h-fit px-4 md:px-2 ">
               <StoryPart />
               <div className="w-full rounded-md border border-zinc-400 p-2">
                 <button
                   onClick={() => handleCreateNewPart()}
                   className="font-bold w-full py-2 text-center flex justify-center items-center gap-2"
                 >
                   <FaPlus /> নতুন পর্ব তৈরি করুন
                 </button>
               </div>
             </aside> */}
          </div>
        </section>
       }
    </PrivateRoutes>
      </Layout>
  );
}

export default index;
