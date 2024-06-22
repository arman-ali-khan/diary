import Story from "../Home/Stories/Story";



function UserStories() {
    return (
        <section className="relative w-full">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2'>
        {
          [...Array(12).keys()].map((story,i)=>{
            return <Story key={i} />
          })
        }
        </div>
       </section>
    );
}

export default UserStories;