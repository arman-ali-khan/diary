import Layout from "@/Layout/Layout";
import Pagination from "@/components/Pagination/Pagination";
import UserEdit from "@/components/Users/UserEdit";
import UserFollow from "@/components/Users/UserFollow";
import UserInfo from "@/components/Users/UserInfo";
import UserStories from "@/components/Users/UserStories";
import { useRouter } from "next/router";
import { useState } from "react";


function userId() {
  //next router
const router = useRouter()

const {tab} = router.query
const userId = router.asPath.split('/')[2]?.split('?')[0]
console.log(tab,'tab')

  const [info,setInfo] = useState('story')
    return (
        <Layout>
  <section className="relative block h-[300px]">
    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')"}}>
      <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]" style={{transform: "translateZ('0px')"}}>
      <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon className="fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section className="relative py-16 bg-base-200">
    <div className="md:container w-full mx-auto px-4">
      <div className="relative flex flex-col break-words bg-base-100 w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="md:px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="bg-gradient text-white rounded-full p-1 absolute w-44 h-[150px] -m-16 -ml-20 lg:-ml-16 max-w-[150px]">
                <img alt="..." src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" className="shadow-xl w-full rounded-full  align-middle border-none "/>
                </div>
                
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 gap-2 mt-32 flex sm:block justify-center sm:mt-0">
                <button className="bg-gradient mx-2 text-white uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-n  one sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Follow
                </button>
                <button  onClick={()=>(router.push(`/user/${userId}?tab=edit`))} className="bg-gradient mx-2 text-white uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-n  one sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Edit
                </button>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blue-600">22</span><span className="text-sm text-blue-400">Followers</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blue-600">10</span><span className="text-sm text-blue-400">Follow</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blue-600">89</span><span className="text-sm text-blue-400">Stories</span>
                </div>
              </div>
            </div>
          </div>
          <section className="flex flex-col max-w-96 mx-auto text-center justify-center">
          <h2 className="text-3xl flex justify-center font-bold">Hello Name</h2>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet praesentium illum quasi, et molestiae aliquam nostrum quidem magni perspiciatis eius beatae voluptates quae iure sunt. Commodi mollitia quis voluptates voluptatum?</p>
          </section>
          <section className="text-center gap-2 mt-12">
            {/* Information section */}
        <div className="flex max-w-fit justify-between px-3"> 
          <button onClick={()=>(router.push(`/user/${userId}?tab=timeline`))} className={`w-full py-1 sm:py-2 border px-2 sm:px-4 rounded-tl-xl border-b-0 ${tab === undefined||tab==='timeline' ? 'bg-gradient text-white':'' }`}>Stories</button>
          <button onClick={()=>(router.push(`/user/${userId}?tab=about`))} className={`w-full py-1 sm:py-2 border px-2 sm:px-4 border-b-0 ${tab === 'about' ? 'bg-gradient text-white':'' }`}>About</button>
          <button onClick={()=>(router.push(`/user/${userId}?tab=followers`))} className={`w-full py-1 sm:py-2 border px-2 sm:px-4 border-b-0 ${tab === 'followers' ? 'bg-gradient text-white':'' }`}>Followers</button>
          <button onClick={()=>(router.push(`/user/${userId}?tab=saved`))} className={`w-full py-1 sm:py-2 border px-2 sm:px-4 border-b-0 ${tab === 'saved' ? 'bg-gradient text-white':'' }`}>Saved</button>
          <button onClick={()=>(router.push(`/user/${userId}?tab=following`))} className={`w-full py-1 sm:py-2 border px-2 sm:px-4 rounded-tr-xl border-b-0 ${tab === 'following' ? 'bg-gradient text-white':'' }`}>Following</button>
        </div>
          </section>
          <div className="pb-10 text-center">
         {
          tab === undefined||tab==='timeline'  ? <>
          <UserStories />
          <Pagination />
          </>:''
         }
         {
          tab === 'about' && <UserInfo />
         }
         {
          tab === 'followers' && <UserFollow />
         }
         {
          tab === 'following' && <UserFollow />
         }
         {
          tab === 'saved' && <>
          <UserStories />
          <Pagination />
          </>
         }
         {
          tab === 'edit' && <UserEdit />
         }
          </div>
        </div>
      </div>
    </div>
  </section>
        </Layout>
    );
}

export default userId;