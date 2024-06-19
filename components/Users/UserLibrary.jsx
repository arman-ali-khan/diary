'use client'
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import Swiper React components



// import required modules
import UserEdit from '@/components/Users/UserEdit';
import UserFollow from '@/components/Users/UserFollow';
import UserStories from '@/components/Users/UserStories';

function UserLibrary() {

    return (
       <section className=" w-full">
        <div role="tablist" className="tabs w-full tabs-lifted">
          {/* tab library */}
  <input type="radio" name="my_tabs_2" role="tab lg:px-12" className="tab border-black w-full" aria-label={`লাইব্রেরী`} defaultChecked />
  <div role="tabpanel" className="tab-content w-full bg-base-100 border-base-300 rounded-box p-2 md:p-6">
<UserStories />
    </div>
{/* tab follow */}
  <input type="radio" name="my_tabs_2" role="tab" className="tab border-black px-12" aria-label={`অনুসরণ`}  />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 h-96 rounded-box p-6">
<UserFollow />
  </div>

    {/* tab followers */}
  <input type="radio" name="my_tabs_2" role="tab" className="tab border-black px-12" aria-label={`অনুসরণকারী`} />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 h-96 rounded-box p-6">
    <UserFollow />
  </div>

    {/* tab edit */}
  <input type="radio" name="my_tabs_2" role="tab" className="tab border-black px-12" aria-label={`সম্পাদনা`} />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 h-96 rounded-box p-6">
  {/* <!-- component --> */}
<UserEdit />
  </div>
</div>

       </section>
    );
}

export default UserLibrary;