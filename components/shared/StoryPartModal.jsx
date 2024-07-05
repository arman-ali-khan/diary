import { useCreatePartStoryMutation } from "@/redux/features/api/storyApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";


const ModalNewPart = ({storyId,refetch}) => {
//  react hook form
const {handleSubmit,register} = useForm()

// disabled btn
const [isDisabled,setIsDisabled] = useState(false)

      // get story data form redux
  const story = useSelector(state=>state.stories)
  /// redux
  const dispatch = useDispatch()

  // post data'
  const [createNewPard,{isError,isLoading,isSuccess,data}] = useCreatePartStoryMutation()

  const dialog = typeof window !== 'undefined' && document.getElementById('create_part_modal');

    const handleCreatePart = async (data) =>{
      setIsDisabled(true)
      const partData = {...data,storyId}
         await createNewPard(partData)
        .then(res=>{
          if(res?.data){
            dialog.removeAttribute('open');
            refetch()
            setIsDisabled(false)
          }
        })
    }
    return (
      <dialog id="create_part_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Create New Part</h3>
          <form onSubmit={handleSubmit(handleCreatePart)}>
            <label htmlFor="title">Title</label>
            <input
            {...register('title',{required:true})}
              id="title"
              type="text"
              placeholder="Title"
              className=" input input-bordered w-full"
            />
            <label htmlFor="summary">Summary</label>
            <textarea
            {...register('summary',{required:true})}
              id="summary"
              type="text"
              placeholder="Summary"
              className="textarea textarea-bordered w-full"
            />
            <div className="flex justify-end items-end p-2">
              <button disabled={isDisabled} className="px-4 disabled:animate-pulse py-2 rounded-full bg-gradient text-white font-bold">
                Create
              </button>
            </div>
          </form>
        </div>
      </dialog>
    );
  };

  export default ModalNewPart