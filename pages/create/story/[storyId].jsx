"use client";
import CreateCategory from "@/components/Create/CreateCategory";
import CreateStoryPard from "@/components/Create/CreateStoryPart";
import CreateTags from "@/components/Create/CreateTags";
import PostHeader from "@/components/shared/PostHeader";
import ModalNewPart from "@/components/shared/StoryPartModal";
import Spinner from "@/components/Spinner/Spinner";
import {
  useGetStoriesQuery,
  useGetStoryByIdQuery
} from "@/redux/features/api/storyApi";
import { updateSiteState } from "@/redux/features/siteSlice";
import { createStory } from "@/redux/features/storiesSlice";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsCheck2, BsUpload } from "react-icons/bs";
import { CgClose, CgPen } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

function partId() {
  // router
  const router = useRouter();

  // story value
  const [value, setValue] = useState("");
  const [height, setHeight] = useState("100%");
  // auto increase
  const handleChange = (event) => {
    setValue(event.target.value);
    setHeight(event.target.scrollHeight + "px");
  };

  const [writeTitle, setWriteTitle] = useState(false);
  const [writeSummary, setWriteSummary] = useState(false);

  const {
    isError,
    isFetching,
    isLoading,
    isSuccess,
    data: stories,
    error,
  } = useGetStoriesQuery("/posts");

  // get story data form redux
  const story = useSelector((state) => state.stories);
  /// redux
  const dispatch = useDispatch();

  // get title
  const [title, setTitle] = useState("");
  // get description
  const [description, setDescription] = useState("");

  // get id from url
  const storyId = router.asPath.split("/")[3];
  // get story by id
  const {
    data: storyData,
    refetch,
    isFetching: isFetchingStory,
  } = useGetStoryByIdQuery(storyId);
  

  useEffect(() => {
    dispatch(createStory(storyData));
  }, [storyData]);

  // image to blob
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const blobUrl = URL.createObjectURL(file);
    setImageUrl(blobUrl);
  };
  




// upload thumbnail
const [uploadStatus, setUploadStatus] = useState('');
const [uploadedFile, setUploadedFile] = useState(null);


const handleFileChange = async (e) => {
  const file = e.target.files[0]
  if (!file) return;

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      setUploadStatus('File uploaded successfully');
      setUploadedFile(result);
      const id = result?.id
      dispatch(createStory({...story,thumbnail:id}))
      dispatch(updateSiteState({ disabledButton: false }));
    } else {
      setUploadStatus('File upload failed');
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    setUploadStatus('File upload failed');
  }
};

  return (
    <section className="container mx-auto">
      <Head><title>Create Story</title></Head>
      <PostHeader
        setWriteSummary={setWriteSummary}
        setWriteTitle={setWriteTitle}
      />
      {/* parts */}
      {isFetchingStory ? (
        <Spinner />
      ) : (
        <>
          <div className="p-4 bg-gradient h-full items-center sm:items-baseline flex flex-col sm:flex-row w-full gap-3 justify-between rounded-b-xl">
          <div className="w-full">
            <h2 className="text-left flex-col sm:flex-row font-black flex items-center gap-3">
              <div className="flex w-full items-center flex-wrap gap-2">
                {!writeTitle ? (
                  <p
                    onDoubleClick={() => setWriteTitle(true)}
                    className="w-44 min-w-fit text-white max-w-96 py-1 sm:py-2 text-xs sm:text-sm sm:tooltip border md:w-96 px-4 rounded-md text-left tooltip-top"
                    data-tip="Double click to edit"
                  >
                    {story?.title || "গল্পের নাম"}
                  </p>
                ) : (
                  <input
                    type="text"
                    onChange={(e) => {
                      dispatch(
                        createStory({ ...story, title: e.target.value })
                      );
                      dispatch(updateSiteState({ disabledButton: false }));
                    }}
                    disabled={!writeTitle}
                    className="w-44 text-left min-w-fit max-w-96 text-xs sm:text-sm md:w-96 py-1 sm:py-2 px-4 rounded-md truncate disabled:text-white"
                    defaultValue={story?.title}
                    placeholder="গল্পের নাম"
                  />
                )}
                <span
                  onClick={() => setWriteTitle(!writeTitle)}
                  className="px-4 cursor-pointer rounded-md  text-white w-12 py-2 inline-block"
                >
                  <span
                    onClick={() => setWriteTitle(!writeTitle)}
                    className="px-4 cursor-pointer rounded-md  text-white w-24 py-2 inline-block"
                  >
                    {writeTitle ? (
                      <span className="flex items-center gap-2">
                        <BsCheck2 /> Save
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <CgPen />
                        Edit
                      </span>
                    )}
                  </span>
                </span>
              </div>
            </h2>
            <div className="flex md:items-center z-40 gap-3">
              <div className="flex w-full flex-col z-40">
                {" "}
                {writeSummary ? (
                  <textarea
                    securitytyle={{ height }}
                    onChange={(e) => {
                      handleChange;
                      dispatch(
                        createStory({ ...story, description: e.target.value })
                      );
                      dispatch(updateSiteState({ disabledButton: false }));
                    }}
                    className="px-3 h-fit py-2 rounded-md min-h-44 text-xs sm:text-sm disabled:text-white"
                    placeholder="গল্পের Description"
                  >
                    {story?.description}
                  </textarea>
                ) : (
                  <div className="border rounded-md">
                  <p
                    data-tip="Double click to edit"
                    style={{ height }}
                    onDoubleClick={() => setWriteSummary(true)}
                    className="px-3 ellipsis min-h-32 text-xs sm:text-sm overflow-hidden text-left cursor-pointer text-white disabled:text-white"
                  >
                    {story?.description || "গল্পের Description"}
                  </p></div>
                )}
                <span
                  onClick={() => setWriteSummary(!writeSummary)}
                  className="px-4 cursor-pointer rounded-md  text-white w-24 py-2 inline-block"
                >
                  {writeSummary ? (
                    <span className="flex items-center gap-2">
                      <BsCheck2 /> Save
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <CgPen />
                      Edit
                    </span>
                  )}
                </span>
                <div className="w-full sm:flex gap-2 text-white items-center">
            {/* Categories */}
            <div className="w-full">
              <h2 className="font-bold text-xs sm:text-sm">ক্যাটাগরি পছন্দ করুনঃ</h2>
              <div className="flex flex-wrap items-center">
                <CreateCategory />
              </div>
            </div>
            {/* Tags */}
            <div className="w-full">
              <h2 className="font-bold text-xs sm:text-sm">ট্যাগ লিখুনঃ</h2>
              <div className="flex flex-wrap items-center">
                <CreateTags />
              </div>
            </div>
          </div>
              </div>
             
            </div>
            </div>
             {/* Featured Image */}
             <div className="w-24 sm:w-44 md:w-64 h-32 sm:h-64 md:h-64 max-w-44 relative">
                <h2 className="text-white truncate font-bold text-xs  md:block sm:text-sm text-center md:text-base">কভার ছবি আপলোড করুন</h2>
                {/* Image */}
                {story?.thumbnail ? (
                  <div className="flex w-full h-full relative">
                    <button
                      onClick={() => {
                        dispatch(createStory({...story,thumbnail:''}))
                        dispatch(updateSiteState({ disabledButton: false }));
                      }}
                      className="absolute bg-base-200 text-rose-500 hover:bg-red-200 rounded-full p-0.5 sm:p-2 duration-300 text-xs md:text-xl right-1 top-1 sm:right-4 sm:top-4"
                    >
                      <CgClose />
                    </button>
                    <img
                      src={`/uploads/${story?.thumbnail}`}
                      alt="Uploaded"
                      className="border border-blue-400 h-full w-full rounded-md object-cover border-dotted sm:p-1"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                ) : (
                  <p className="text-error text-xs absolute bottom-2 left-1">{uploadStatus && uploadStatus}</p>
                )}
                {story?.thumbnail ? (
                  <></>
                ) : (
                  <label className="bg-base-100 flex items-center flex-col cursor-pointer duration-300 justify-center border-2 hover:border-dashed rounded-md border-blue-300 h-full w-full">
                    <span className="text-xs sm:text-sm md:text-xl flex justify-center">
                      <BsUpload />
                    </span>
                    <input
                      accept="image/*"
                      onChange={handleFileChange}
                      hidden
                      type="file"
                    />
                    <p className="truncate hidden sm:flex text-xs sm:text-sm">কভার ছবি আপলোড করুন</p>
                  </label>
                )}
              </div>
          </div>
          <div className="flex justify-end my-3 w-full">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {
              storyData && <button
              className="px-4 py-2 bg-gradient text-white font-bold rounded-full w-fit"
              onClick={() =>
                document.getElementById("create_part_modal").showModal()
              }
            >
              Create New Part
            </button>
            }
          </div>
          {storyData?.parts ? (
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 my-4 w-full">
              {storyData?.parts?.map((part, i) => (
                <CreateStoryPard key={i} part={part} />
              ))}
            </section>
          ) : (
            <div className="flex justify-center py-12 w-full text-xs sm:text-sm md:text-2xl">
              <h2 className="text-center">{storyData?.title ? 'No part has been created yet':'Create story first'}</h2>
            </div>
          )}
        </>
      )}

      <ModalNewPart refetch={refetch} storyId={storyId} />
    </section>
  );
}

export default partId;
