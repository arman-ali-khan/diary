import UserLibrary from "@/components/Users/UserLibrary";
import Navbar from "@/components/shared/Navbar";


function userId() {
    return (
        <section>
<Navbar />
  <section className="relative block h-[500px]">
    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')"}}>
      <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]" style={{transform: "translateZ('0px')"}}>
      <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon className="text-blue-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section className="relative py-16 bg-blue-200">
    <div className="md:container w-full mx-auto px-4">
      <div className="relative flex flex-col break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
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
              <div className="py-6 px-3 mt-32 flex sm:block justify-center sm:mt-0">
                <button className="bg-gradient text-white uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-n  one sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Follow
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
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blue-700">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blue-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blue-400"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-blue-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blue-400"></i>Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-blue-600">
              <i className="fas fa-university mr-2 text-lg text-blue-400"></i>University of Computer Science
            </div>
          </div>
          <div className="pb-10 text-center">
           <UserLibrary />
          </div>
        </div>
      </div>
    </div>
  </section>
        </section>
    );
}

export default userId;