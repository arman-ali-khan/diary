import { useCreateStoryMutation } from "@/redux/features/api/storyApi";
import { createStory } from "@/redux/features/storiesSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const ModalNewPart = () => {
    const [title,setTitle] = useState('')
    const [summary,setSummary] = useState('')

      // get story data form redux
  const story = useSelector(state=>state.stories)
  /// redux
  const dispatch = useDispatch()

  // post data'
  const [createNewPard,{isError,isLoading,isSuccess,data}] = useCreateStoryMutation()


    const handleCreatePart = async () =>{
         await createNewPard()
        .then(res=>{
            console.log(res,'data story part')
        })
    }
    return (
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Create New Part</h3>
          <div>
            <label htmlFor="title">Title</label>
            <input
            onChange={(e)=>dispatch(createStory({...story,parts:[...story?.parts,{title:e.target.value}]}))}
              id="title"
              type="text"
              placeholder="Title"
              className=" input input-bordered w-full"
            />
            <label htmlFor="summary">Summary</label>
            <textarea
            onChange={(e)=>dispatch(createStory({...story,parts:[...story?.parts,{summary:e.target.value}]}))}
              id="summary"
              type="text"
              placeholder="Summary"
              className="textarea textarea-bordered w-full"
            />
            <div className="flex justify-end items-end p-2">
              <button onClick={ ()=> handleCreatePart()} className="px-4 py-2 rounded-full bg-gradient text-white font-bold">
                Create
              </button>
            </div>
          </div>
        </div>
      </dialog>
    );
  };

  export default ModalNewPart