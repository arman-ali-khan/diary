import Layout from "@/Layout/Layout";
import Card from "@/components/Home/Stories/Card";
import Footer from "@/components/shared/Footer";
import { convertToBengaliNumber } from "@/lib/convertToBengaliNumber";
import { useGetStoryByIdQuery } from "@/redux/features/api/storyApi";
import { increment } from "@/redux/features/subscribeSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { CgEye } from "react-icons/cg";
import { FaCheck, FaPlus, FaStarHalfAlt } from "react-icons/fa";
import {
  MdOutlinePlaylistAdd,
  MdOutlinePlaylistAddCheck,
} from "react-icons/md";
import { TbHeart, TbHeartBroken } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

function storyId() {
  // router
  const router = useRouter()
  // subscribe state
  const subscribes = useSelector((state) => state.subscribe);
  console.log(subscribes?.subscribes, "subscribes");
  const dispatch = useDispatch();
  const handleCopy = (e) => {
    e.preventDefault();
    toast.error("Copy not allowed");
  };

  // subscribe
  const [subscribed, setSubscribed] = useState(false);
  // handle subscribe
  const handleSubscribe = (data) => {
    const subscribeData = {
      subscribes: data,
      userId: "123",
      subscribeId: "345",
      subscribe: { type: "user", userId: "123", storyId: "" },
    };
    dispatch(increment(subscribeData));
  };
// get story id
const storyId = router.asPath?.split('/')[2]
console.log(storyId,'id')
  const {isError,isFetching,isLoading,isSuccess,data:story,error} = useGetStoryByIdQuery(storyId)

  return (
    <Layout title={`${story?.title||'Story Page'} || Diary`}>
      <section className="md:p-5 mx-auto relative rounded-t-xl bg-[darkblue]">
          {/* <span className="h-1/2 bg-[darkblue] w-full absolute -z-20"></span> */}
          <div className="flex flex-col mx-auto overflow-hidden rounded-xl">
            <div className="w-full bg-base-300 md:flex p-3 justify-between flex-row-reverse">
              <div className="md:min-w-56 w-full md:max-w-60 md:ml-4 h-96 relative">
              {
                isFetching ? <div className="md:min-w-56 w-full mr-4 md:max-w-60 bg-base-200 md:ml-4 h-96 skeleton border shadow-xl"></div>
                :
                <img
                  className="h-full rounded-xl object-cover w-full"
                  src={`/uploads/${story?.thumbnail}`}
                  alt={story?.title}
                />
              }
                <div className="absolute bottom-0 md:hidden right-0">
                  <button className="p-0.5 rounded-br-md">
                    <p className="items-center flex rounded gap-1 backdrop-blur-lg text-[#fff] px-3 py-2 w-full">
                      <span className="hidden lg:block">রেটিং</span>
                      <span className="lg:hidden">
                        <FaStarHalfAlt />
                      </span>{" "}
                      <span>{convertToBengaliNumber(4.6)}</span>
                    </p>
                  </button>
                </div>
              </div>
              <div className="text-left relative max-w-full min-w-56 lg:max-w-3xl w-full">
                <ul className="my-4 ml-3">
                  <li className="flex flex-wrap items-center gap-3">
                  { isFetching ? <> {[...Array(3).keys()]?.map((item,i)=><div className="w-24 h-6 border shadow-md skeleton rounded-full bg-base-200"></div>)}</>
                  :
                    story?.categories?.length ? story?.categories?.map((category,i)=>{
                      return   <Link key={i}
                      className="border border-zinc-400 rounded-full px-2"
                      href={`/category/${category?.value}`}
                    >
                      {category?.label}
                    </Link>
                    })
                    :
                    <div className=""></div>
                  }
                  </li>
                </ul>

                <div className="flex items-center">
                  <h2 className="text-xl w-full font-bold sm:text-xl truncate md:text-2xl">
                    {story?.title}
                  </h2>
                  {subscribed ? (
                    <button
                      data-tip="পছন্দের তালিকায় যোগ করুন"
                      onClick={() => {
                        setSubscribed(!subscribed);
                      }}
                      className={`w-12 flex tooltip items-center py-0 h-8 justify-center gap-2 bg-gradient text-white rounded-md text-lg`}
                    >
                      <MdOutlinePlaylistAdd className="px-2 py-0" size={44} />
                    </button>
                  ) : (
                    <button
                      data-tip="পছন্দের তালিকা থেকে সরান"
                      onClick={() => {
                        setSubscribed(!subscribed);
                      }}
                      className={`w-12 flex tooltip items-center justify-center h-8 gap-2 bg-gradient p-[1px] rounded-md text-lg`}
                    >
                      <div className="bg-base-100 rounded w-full h-full flex items-center justify-center">
                        <MdOutlinePlaylistAddCheck
                          className="px-2 py-0"
                          size={44}
                        />
                      </div>
                    </button>
                  )}
                </div>

                {/* Story Info */}
                <div className="flex items-center max-w-2xl gap-1 mt-4 w-full justify-between">
                  <div>
                    {subscribes?.subscribes ? (
                      <button
                        onClick={() => handleSubscribe(false)}
                        data-tip="অনুসরণ করুন"
                        className={`px-4 py-2 tooltip tooltip-right flex items-center gap-2 bg-gradient text-white rounded-md text-lg`}
                      >
                        অনুসরণ <span className="hidden lg:block">করুন</span>{" "}
                        <FaPlus />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSubscribe(true)}
                        data-tip="অনুসরণ থেকে সরান"
                        className={`items-center gap-2 tooltip tooltip-right bg-gradient p-0.5 flex flex-col rounded-md `}
                      >
                        <div className="items-center flex rounded flex-col bg-base-100  px-3 py-2 w-full font-[SolaimanLipi]">
                          <span className="flex items-center gap-2">
                            <span className="hidden lg:block">অনুসরণ থেকে</span>{" "}
                            সরান <FaCheck />
                          </span>
                        </div>
                      </button>
                    )}
                  </div>
                  <div className=" font-[SolaimanLipi]">
                    {subscribed ? (
                      <button
                        onClick={() => setSubscribed(!subscribed)}
                        data-tip="পছন্দ করুন"
                        className={`px-4 py-2 tooltip flex items-center gap-2 bg-gradient text-white rounded-md text-lg`}
                      >
                        পছন্দ <span className="hidden lg:block">করুন</span>{" "}
                        <TbHeart size={22} />
                      </button>
                    ) : (
                      <button
                        onClick={() => setSubscribed(!subscribed)}
                        data-tip="পছন্দ থেকে সরান"
                        className={`items-center gap-2 tooltip bg-gradient p-0.5 flex flex-col rounded-md`}
                      >
                        <div className="items-center flex rounded flex-col bg-base-100  px-3 py-2 w-full font-[SolaimanLipi]">
                          <span className="flex items-center gap-2">
                            <span className="hidden lg:block">পছন্দ থেকে</span>{" "}
                            সরান
                            <TbHeartBroken
                              className="text-[darkorchid]"
                              size={22}
                            />
                          </span>
                        </div>
                      </button>
                    )}
                  </div>
                  <div>
                    <button className="bg-gradient p-0.5 rounded-md">
                      <p className="items-center flex rounded gap-1 bg-base-100  px-3 py-2 w-full">
                        <span className="hidden lg:block">পড়েছেনঃ</span>{" "}
                        <span className="lg:hidden">
                          <CgEye />
                        </span>{" "}
                        <span>{convertToBengaliNumber(1234)}+</span>
                      </p>
                    </button>
                  </div>
                  <div className="hidden md:block right-0">
                    <button className="p-0.5 rounded-md bg-gradient">
                      <p className="items-center flex rounded gap-1 backdrop-blur-lg text-white px-3 py-2 w-full">
                        <span className="hidden lg:block">রেটিং</span>{" "}
                        <span className="lg:hidden">
                          <FaStarHalfAlt />
                        </span>{" "}
                        <span>{convertToBengaliNumber(4.6)}</span>
                      </p>
                    </button>
                  </div>
                </div>
                {/* User Info */}
                {
                  isFetching ? <div className="rounded-xl p-3 w-full max-w-2xl skeleton bg-base-200 shadow-md my-4 h-20"></div>
                  :
                  <div className="my-4 flex   border-2 border-[darkblue] rounded-xl p-3 w-full max-w-2xl justify-between items-center">
                  <div className="w-full gap-2 flex items-center h-12">
                    <img
                      className="w-12 h-full rounded-full"
                      src="https://static-assets.pratilipi.com/author/image?authorId=6800000004472335&version=8dafcf11-e1e8-46ca-bc84-7dc07530ba92"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <h2 className="font-bold truncate text-xs md:text-lg">
                        {story?.author}
                      </h2>
                      <p className="text-xs md:text-base">
                        {convertToBengaliNumber(12)}লা অনুসরণকারী
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex justify-end">
                    {subscribes?.subscribes ? (
                      <button
                        onClick={() => handleSubscribe(false)}
                        data-tip="অনুসরণ করুন"
                        className={`px-4 py-2 tooltip flex items-center gap-2 bg-gradient text-white rounded-md text-lg`}
                      >
                        <span className="hidden lg:block">অনুসরণ করুন</span>{" "}
                        <FaPlus />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSubscribe(true)}
                        data-tip="সরান"
                        className={`items-center font-[SolaimanLipi] gap-2 tooltip bg-gradient p-0.5 flex flex-col rounded-md`}
                      >
                        <div className="items-center flex rounded flex-col bg-base-100  px-3 py-2 w-full font-[SolaimanLipi]">
                          <span className="flex items-center gap-2">
                            <span className="hidden lg:block">
                              অনুসরণ করেছেন
                            </span>{" "}
                            <FaCheck />
                          </span>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
                }
                {/* description */} 
                {
                    isFetching ? <div className="skeleton h-36 w-full bg-base-200 border shadow-md rounded-md"></div>
                    :
                <div className="summary mt-6 lg:mt-3 lg:absolute bottom-0">
                    <p className="select-warning ellipsis" onCopy={handleCopy}>
                    {story?.description}
                  </p>
                </div> }
              </div>
            </div>

            {/* <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 bg-gray-500" /> */}
            {/* Ads */}
            <div className="h-16 bg-base-100 w-full"></div>
            <div className="mx-auto py-4 space-y-6 px-2 lg:px-10 lg:rounded-md bg-base-200 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 2xl:grid-cols-3">
                {isFetching||isLoading ? <>{[...Array(4).keys()]?.map((item,i)=><div key={i} className="w-full h-24 bg-base-200 rounded-md border skeleton shadow-md"></div>)}</>
                :
                  story?.parts?.map((part,i) => {
                  return <Card part={part} key={i} id={i+1} />;
                })}
              </div>
            </div>
            <Footer />
          </div>
      </section>
    </Layout>
  );
}

export default storyId;
