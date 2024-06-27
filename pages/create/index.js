import Layout from "@/Layout/Layout";
import StoryEdit from "@/components/Home/Stories/StoryEdit";
import PostHeader from "@/components/shared/PostHeader";
import PrivateRoutes from "@/routes/privateRoutes";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";


function index() {
    
    return (
        <PrivateRoutes>
       <Layout>
       <section className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row w-full gap-3 mt-12 mb-12">
             {/* instruction */}
             <div className="w-full md:ml-12">
               <h2 className="font-bold text-xl">আমার গল্প গুলো</h2>
             
     
               {/* post box */}
             <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
             {
               [...Array(4).keys()]?.map((story,i)=>{
                 return <StoryEdit />
               })
              }
              <div className="card-container min-w-48 max-h-96 max-w-56 w-64 flex justify-center relative">
             <Link className="card card-compact border rounded-lg items-center shadow-xl justify-center flex h-full text-center w-full" href={'/create/story/123'}>
               <FaPlus size={55} />
               <p>নতুন গল্প</p>
             </Link>
           </div>
             </section>
            
             </div>
             {/* aside */}
             {/* <aside className="w-96 max-w-fit min-w-56 space-y-2 h-fit px-4 md:px-2 ">
               <StoryPart />
               <div className="w-full rounded-md border border-zinc-400 p-2">
                 <button
                   onClick={() => handleCreateNewPart()}
                   className="font-bold w-full py-2 text-center flex justify-center items-center gap-2"
                 >
                   <FaPlus /> নতুন পর্ব তৈরি করুন
                 </button>
               </div>
             </aside> */}
           </div>
       </section>
       </Layout>
      </PrivateRoutes>
    );
}

export default index;