"use client";
import CreateStoryPard from "@/components/Create/CreateStoryPart";
import PostHeader from "@/components/shared/PostHeader";
import ModalNewPart from "@/components/shared/StoryPartModal";
import Spinner from "@/components/Spinner/Spinner";
import {
  useGetStoryByIdQuery,
  useGetStoryQuery,
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
  } = useGetStoryQuery("/posts");

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
          <div className="p-4 bg-gradient rounded-b-xl">
            <h2 className="text-left flex-col sm:flex-row font-black flex items-center gap-3">
              <div className="flex w-full items-center flex-wrap gap-2">
                {!writeTitle ? (
                  <p
                    onDoubleClick={() => setWriteTitle(true)}
                    className="w-44 min-w-fit text-white max-w-96 sm:tooltip border md:w-96 px-4 rounded-md text-left tooltip-top"
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
                    className="w-44 text-left min-w-fit max-w-96 md:w-96 px-4 rounded-md truncate disabled:text-white"
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
            <div className="sm:flex z-40 items-center gap-3">
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
                    className="px-3 h-fit py-2 rounded-md min-h-44 overflow-hidden  text-sm disabled:text-white"
                    placeholder="গল্পের Description"
                  >
                    {story?.description}
                  </textarea>
                ) : (
                  <p
                    data-tip="Double click to edit"
                    style={{ height }}
                    onDoubleClick={() => setWriteSummary(true)}
                    className="px-3 h-fit border py-2 rounded-md min-h-44 max-h-44 overflow-hidden overflow-ellipsis sm:tooltip tooltip-top text-left cursor-pointer text-sm text-white disabled:text-white"
                  >
                    {story?.description || "গল্পের Description"}
                  </p>
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
              </div>
              {/* Featured Image */}
              <div className="w-64 h-full">
                <h2 className="text-white font-bold">কভার ছবি আপলোড করুন</h2>
                {/* Image */}
                {imageUrl ? (
                  <div className="flex w-full relative">
                    <button
                      onClick={() => setImageUrl("")}
                      className="absolute bg-base-200 text-rose-500 hover:bg-red-200 rounded-full p-2 duration-300 text-xl right-4 top-4"
                    >
                      <CgClose />
                    </button>
                    <img
                      src={imageUrl}
                      alt="Uploaded"
                      className="border border-blue-400 h-64 w-full rounded-md object-cover border-dotted p-1"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                ) : (
                  ""
                )}
                {imageUrl ? (
                  ""
                ) : (
                  <label className="bg-base-100 flex items-center flex-col cursor-pointer duration-300 justify-center border-2 hover:border-dashed rounded-md border-blue-300 h-64 w-full">
                    <span className="text-4xl flex justify-center">
                      <BsUpload />
                    </span>
                    <input
                      accept="image/*"
                      onChange={handleImageUpload}
                      hidden
                      type="file"
                    />
                    <p>কভার ছবি আপলোড করুন</p>
                  </label>
                )}
              </div>
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
            <div className="flex justify-center py-12 text-2xl">
              <h2 className="">No part has been created yet</h2>
            </div>
          )}
        </>
      )}

      <ModalNewPart refetch={refetch} storyId={storyId} />
    </section>
  );
}

export default partId;
