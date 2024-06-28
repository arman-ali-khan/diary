import Link from "next/link"

const Drawer = () =>{
    return <div className="drawer z-20">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 mt-12 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li>  <Link
            href={"/blog"}
            className="duration-300 hover:underline px-4 rounded-full"
          >
            ব্লগ
          </Link></li>
      <li><Link
            href={"/ebook"}
            className="duration-300 hover:underline px-4 rounded-full"
          >
            ই-বুক
          </Link></li>
      <li> <Link
            href={"/audio"}
            className="duration-300 hover:underline px-4 rounded-full"
          >
            অডিও গল্প
          </Link></li>

    </ul>
  </div>
</div>
}

export default Drawer