import { useCreateStoryMutation, useGetStoryByIdQuery, useUpdatePartByIdMutation } from "@/redux/features/api/storyApi";
import { updateSiteState } from "@/redux/features/siteSlice";
import { createStory } from "@/redux/features/storiesSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsReply } from "react-icons/bs";
import { IoSaveOutline } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
function PostHeader({ setWriteTitle, setWriteSummary }) {
    // router 
    const router = useRouter()
  // redux
  const dispatch = useDispatch();
  const story = useSelector((state) => state.stories);
  const part = useSelector((state) => state.part);
  // get site state
  const siteState = useSelector((state)=>state.sites)

  // is disabled publish btn
  const [disabled,setDisabled] = useState(true)

  // handle draft
  const handleDraft = () => {
    dispatch(createStory({ ...story, published: 0 }));
  };
  // mutation
  const [createStoryFinal] = useCreateStoryMutation();
  const [updatePartById] = useUpdatePartByIdMutation();
  // handle create story

  // create id
  const storyId = router.asPath?.split('/')[3]
  const storyPart = router.asPath?.split('/')[4]

  // get story by id
  const {isError,isFetching,isLoading,isSuccess,data:storyData,refetch} = useGetStoryByIdQuery(storyId)

  const handleCreateStory = () => {
    createStoryFinal({ ...story, published: 1,storyId}).then((res) => {
      console.log(res.data,'data')
      setWriteTitle(false);
      setWriteSummary(false);
      dispatch(updateSiteState({disabledButton:true}))
      setDisabled(true)
      refetch();
    });
  };

  const handleUpdatePart = () => {
    updatePartById({part:part,id:storyPart}).then((res) => {
      console.log(res.data,'data')
      dispatch(updateSiteState({disabledButton:true}))
    });
  };


  return (
    <section className="flex items-center sticky top-0 z-50 md:gap-12 justify-between px-6 h-12 bg-base-300">
      <div className="w-full flex items-center gap-2 md:w-full">
      <Link href={'/create'} className="px-2 sm:px-4 flex py-1"><BsReply className="text-lg" /><span className="hidden sm:block">Back to create</span>  </Link>
        <Link className="px-4 h-5 md:h-8" href={"/"}>
          <img src="/logo.png" className="w-full h-full" alt="" />
        </Link>
          
      </div>
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleDraft()}
            data-tip="খসড়া"
            className="px-4 py-2 tooltip tooltip-bottom rounded bg-base-100 border border-blue-300 hover:bg-base-200 duration-300 flex items-center gap-1"
          >
            {" "}
            <IoSaveOutline className="text-sm sm:text-xl md:text-2xl" />{" "}
            <span className="hidden md:block">খসড়া</span>
          </button>
          {
            storyPart ? 
            <button
          disabled={siteState?.disabledButton}
            onClick={() => handleUpdatePart()}
            data-tip={siteState?.disabledButton?'লিখুন':'আপডেট'}
            className="px-4 py-2 tooltip tooltip-bottom rounded bg-gradient hover:from-[darkorchid] hover:to-[darkblue] hover:duration-300 text-white hover:opacity-85 duration-300 flex items-center disabled:bg-zinc-700 disabled:from-[#565357] gap-1"
          >
            <LuPencilLine className="text-sm sm:text-xl md:text-2xl" />{" "}
            <span className="hidden md:block">আপডেট</span>
          </button>:
          <button
          disabled={siteState?.disabledButton}
            onClick={() => handleCreateStory()}
            data-tip={siteState?.disabledButton?'লিখুন':'প্রকাশ'}
            className="px-4 py-2 tooltip tooltip-bottom rounded bg-gradient hover:from-[darkorchid] hover:to-[darkblue] hover:duration-300 text-white hover:opacity-85 duration-300 flex items-center disabled:bg-zinc-700 disabled:from-[#565357] gap-1"
          >
            <LuPencilLine className="text-sm sm:text-xl md:text-2xl" />{" "}
            <span className="hidden md:block">প্রকাশ</span>
          </button>
          }
         
        </div>
      </div>
    </section>
  );
}

export default PostHeader;
