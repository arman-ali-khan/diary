import Link from "next/link";

const { useState } = require("react");

const CreateStoryPard = ({ part }) => {
  // show actions
  const [showAction, setShowAction] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setShowAction(true)}
        onMouseLeave={() => setShowAction(false)}
        onClick={() => setShowAction(!showAction)}
        className="relative min-h-44 max-h-44 w-full h-full border overflow-ellipsis overflow-hidden flex-wrap border-zinc-400 rounded-md p-2"
      >
        <a>
          <h2 className="truncate text-lg font-bold">{part?.title}</h2>
          <p className="text-sm w-full">{part?.summary}</p>
          <div
            style={{ bottom: showAction ? "0" : "-100px" }}
            className="flex left-0 absolute duration-300 justify-between w-full"
          >
            <Link
              href="/create/story/12/12"
              className="bg-base-100 flex justify-center text-blue-600 w-full py-1 rounded-l-md rounded-t-none hover:bg-base-200 border"
            >
              Edit
            </Link>
            <button className="bg-base-100 text-rose-600 w-full py-1 rounded-r-md rounded-t-none hover:bg-base-200 border">
              Delete
            </button>
          </div>
        </a>
      </div>
    </>
  );
};

export default CreateStoryPard;
