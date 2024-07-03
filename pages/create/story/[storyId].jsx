"use client"
import CreateStoryPard from "@/components/Create/CreateStoryPart";
import PostHeader from "@/components/shared/PostHeader";
import ModalNewPart from "@/components/shared/StoryPartModal";
import { useGetStoryQuery } from "@/redux/features/api/storyApi";
import { createStory } from "@/redux/features/storiesSlice";
import { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { CgPen } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

function partId() {
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
  const story = useSelector(state=>state.stories)
  /// redux
  const dispatch = useDispatch()


  // get title
  const [title, setTitle] = useState("");
  // get description
  const [description, setDescription] = useState("");

  return (
    <section className="container mx-auto">
      <title>Create Story</title>
      <PostHeader />
      {/* parts */}
      <div className="p-4 bg-gradient">
        <h2 className="text-left flex-col sm:flex-row font-black flex items-center gap-3">
          <div className="flex w-full items-center flex-wrap gap-2">
            {!writeTitle ? (
              <p
                onDoubleClick={() => setWriteTitle(true)}
                className="w-44 min-w-fit text-white max-w-96 sm:tooltip border md:w-96 px-4 rounded-md text-left tooltip-top"
                data-tip="Double click to edit"
              >
                গল্পের নাম
              </p>
            ) : (
              <input
                type="text"
                onChange={(e) => dispatch(createStory({...story,title:e.target.value})) }
                disabled={!writeTitle}
                className="w-44 text-left min-w-fit max-w-96 md:w-96 px-4 rounded-md truncate disabled:text-white"
                defaultValue={""}
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
        <div className="flex flex-col z-40">
          {writeSummary ? (
            <textarea
              securitytyle={{ height }}
              onChange={(e) => {
                handleChange;
                dispatch(createStory({...story,description:e.target.value}))
              }}
              className="px-3 h-fit py-2 rounded-md min-h-44 overflow-hidden  text-sm disabled:text-white"
              placeholder="গল্পের Description"
            ></textarea>
          ) : (
            <p
              data-tip="Double click to edit"
              style={{ height }}
              onDoubleClick={() => setWriteSummary(true)}
              className="px-3 h-fit border py-2 rounded-md min-h-44 sm:tooltip tooltip-top text-left cursor-pointer text-sm text-white disabled:text-white"
            >
              গল্পের Description
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
      </div>
      <div className="flex justify-end my-3 w-full">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="px-4 py-2 bg-gradient text-white font-bold rounded-full w-fit"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          {" "}
          Create New Part
        </button>
      </div>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 my-4 w-full">
        {stories?.slice(0, 12)?.map((part, i) => (
          <CreateStoryPard key={i} part={part} />
        ))}
      </section>
      <ModalNewPart />
    </section>
  );
}

export default partId;


