import Link from "next/link"

const { useState } = require("react")

const CreateStoryPard = ({ part }) => {
  // show actions
  const [showAction, setShowAction] = useState(false)
  return <>
    <div

      className="max-h-44 relative min-h-44 w-full h-full border overflow-hidden border-zinc-400 rounded-md p-2"
    >
      <a onMouseEnter={() => setShowAction(true)}
        onMouseLeave={() => setShowAction(false)}
        onClick={() => setShowAction(!showAction)} >

        <h2 className="truncate text-lg font-bold">
          {part?.title}
        </h2>
        <p className="text-sm h-24 overflow-ellipsis w-full">
          {part?.body}
        </p>
      </a>
      <div onMouseEnter={() => setShowAction(true)}
        onMouseLeave={() => setShowAction(false)} style={{ bottom: showAction ? '0' : '-100px' }} className="flex left-0 absolute duration-300 justify-between w-full">
        <Link href='/create/story/12/12' className="bg-blue-100 flex justify-center text-blue-600 w-full py-1 rounded-l-md rounded-t-none hover:bg-blue-200">
          Edit
        </Link>
        <button className="bg-rose-100 text-rose-600 w-full py-1 rounded-r-md rounded-t-none hover:bg-rose-200">
          Delete
        </button>
      </div>
    </div>
  </>
}

export default CreateStoryPard