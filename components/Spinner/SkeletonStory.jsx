const SkeletonStory = () =>{
    return  <section className="card-container truncate w-full relative">
    <div data-tip="Rating" className="rating gap-1 tooltip tooltip-left flex absolute top-3 z-4 right-3 skeleton w-12 shadow-lg h-8 px-1 rounded-lg py-0.5 z-50 items-center">
  {/* <input type="radio" name="rating-3" className="mask text-xs w-4 inline-block mask-star bg-orange-400" defaultChecked /> */}
</div>
  <div className="card card-compact border rounded-lg w-full shadow-xl">
  <a className="rounded-t-lg overflow-hidden">
    <figure className="h-44 skeleton sm:h-56 md:h-72 object-cover w-full">
      {/* <img
      className="h-44 sm:h-56 md:h-72 object-cover w-full"
        src={story?.thumbnailUrl}
        alt={story?.title}
      /> */}
    </figure></a>
    <div className="card-body truncate mt-1 !p-0 mb-2 !gap-0">
      <a className="my-2">
      <h2 style={{lineHeight:'22px',marginTop:'5px'}} data-tip='' className="card-title w-full overflow-hidden text-ellipsis font-[SolaimanLipi] h-6 skeleton tooltip flex justify-start text-left text-sm py-0 my-2 sm:text-base md:text-lg lg:text-lg !px-1 !m-0"></h2>
      </a>
      <div className="flex text-base-content shadow-lg items-center justify-between gap-2 w-full text-center">
      <p className="text-xs py-0 sm:text-base shadow-lg md:text-sm lg:text-sm !px-1 h-5 skeleton !m-0"></p>
      <p  className="text-xs py-0 sm:text-base shadow-lg md:text-sm lg:text-sm !px-1 !m-0 skeleton h-5"></p>
      </div>
    </div>
  </div>
  </section>
}
export default SkeletonStory