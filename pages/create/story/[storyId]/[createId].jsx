"use client";
import PostHeader from "@/components/shared/PostHeader";
import Spinner from "@/components/Spinner/Spinner";
import { useGetStoryByIdQuery, useGetStoryPartByIdQuery } from "@/redux/features/api/storyApi";
import { updatePart } from "@/redux/features/partSlice";
import { updateSiteState } from "@/redux/features/siteSlice";
// import ReactQuill from 'react-quill';
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import "quill/dist/quill.bubble.css"; // Add css for snow theme
import { useEffect, useState } from "react";
import { BsReply } from "react-icons/bs";
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from "react-redux";
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme
const toolbarOptions = [
  [{ 'header': [1, 2, false] }],
  ['bold', 'italic', 'blockquote'],
  ['link'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }]
];

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});


const page = () => {
  // redux
  const dispatch = useDispatch();

  // get part data
  const part = useSelector((state) => state.part);
  // story data
  
// Function to test string
function isJSON(str) {
  try {
      return JSON.parse(str) && !!str;
  } catch (e) {
      return false;
  }
}
  // react quill
  const theme = "snow"; //bubble

  const placeholder = "লিখুন...";


  // router
  const router = useRouter();
  // create id
  const params = useParams();
  const id = params?.createId;

  // get routes id
  const pathId = router.asPath;
  const storyId = pathId?.split("/")[3];
  const partId = pathId?.split("/")[4];

  // get story data
  const {data:story} = useGetStoryByIdQuery(storyId)

  // get story part by id
  const {
    isError,
    isLoading,isFetching,
    data: partData,refetch
  } = useGetStoryPartByIdQuery({ storyId, partId });

  useEffect(() => {
    dispatch(updatePart(partData));
  }, [storyId, partId, partData]);
  // get part description
  const description = part?.description &&storyId&&partId&& partData && JSON.parse(part?.description)

  // value
  const [value,setValue] = useState('')
  // handle update content
  const handleUpdateContent  = (e) =>{
    try {
      dispatch(updatePart({...part, description:JSON.stringify(e)}))
      dispatch(updateSiteState({ disabledButton: false }))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="container mx-auto">
      <Head><title>{partData?.title || 'Create Part'}</title></Head>
      {/* Story header */}
      <PostHeader refetchPart={refetch} />
      {storyId ?
        <div className="flex truncate items-center px-2 mx-2 sm:mx-4 md:mx-6 gap-3 my-3 sm:my-5 md:my-12">
        <Link
          href={`/create/story/${storyId}`}
          className="px-3 md:px-4 md:py-2 py-1 rounded-md bg-base-100 shadow-xl flex items-center gap-2"
        >
          <BsReply />
          Back
        </Link>
        <h2 className="truncate text-xl font-bold">
         {story?.title}
        </h2>
      </div>:''
      }
      {/* Story header  end */}
      { isFetching || isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col-reverse md:flex-row w-full gap-3 mt-12 mb-12">
          {/* instruction */}
          <div className=" md:w-[900px] px-2 md:max-w-full md:min-w-[300px] md:ml-12">
            <h2 className="font-bold text-xl">নির্দেশনাঃ</h2>
            <div className="w-full p-2">
              <ul className="trun">
                <li className="list-item list-inside list-decimal">
                  গল্প সম্পুর্ন বাংলা ভাষায় লিখতে হবে ।
                </li>
                <li className="list-item list-inside list-decimal">
                  লেখার সুবিধার্তে{" "}
                  <a
                    className="font-bold text-blue-600"
                    href="https://chromewebstore.google.com/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab"
                    target="_blank"
                  >
                    গুগল ইনপুট টুলস
                  </a>{" "}
                  ব্যবহার করতে পারেন । (
                  <a
                    className="font-bold text-blue-600"
                    href="https://chromewebstore.google.com/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab"
                    target="_blank"
                  >
                    ব্যবহারের নিয়ম
                  </a>
                  )
                </li>
                <li className="list-item list-inside list-decimal">
                  ছবি আপলোড করার আগে যে কোন কিছু (দরকারি কিছু নয় এমন) লিখে
                  সিলেক্ট করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন ।
                </li>
              </ul>
            </div>

            {/* post box */}
            <div className="md:container bg-gradient p-0.5 md:p-1 rounded-md md:rounded-xl h-[400px] md:h-[600px] md:min-h-full md:max-h-full md:w-[800px] md:max-w-full overflow-hidden md:min-w-[300px]">
              {/* <div
                className="text-xs md:text-base bg-base-100 md:min-h-[500px] md:max-h-[800px] h-[400px] md:h-[600px] border rounded md:rounded-lg"
                ref={quillRef}
              /> */}
              <ReactQuill
               modules={{
          toolbar: toolbarOptions,
        }}
              className="text-xs md:text-base bg-base-100 h-full border rounded md:rounded-lg"
              theme={theme}
              formats={[
          'header', 'bold', 'italic', 'blockquote', 'link', 'list'
        ]}
              value={description}
              onChange={(e)=>handleUpdateContent(e)} />
            </div>
          </div>
          {/* aside */}
          <aside className="md:w-96 w-full gap-4 flex flex-col sm:flex-row md:flex-col max-w-full min-w-56 space-y-4 h-fit px-4 md:px-2 ">
            <div className="w-full">
              <h2 className="w-full">Title</h2>
              <div className="w-full">
                <input
                  onChange={(e) => {
                    dispatch(updatePart({ ...part, title: e.target.value }));
                    dispatch(updateSiteState({ disabledButton: false }));
                  }}
                  defaultValue={partData?.title}
                  className="input w-full input-bordered"
                />
              </div>
            </div>
            <div className="w-full">
              <h2 className="w-full">Summary</h2>
              <div className="w-full">
                <textarea
                  onChange={(e) => {
                    dispatch(updatePart({ ...part, summary: JSON.stringify() }));
                    dispatch(updateSiteState({ disabledButton: false }));
                  }}
                  className="textarea w-full h-56 textarea-bordered"
                >
                  {isJSON(partData?.summary) ? JSON.parse(partData?.summary):partData?.summary}
                </textarea>
              </div>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
};

export default page;
