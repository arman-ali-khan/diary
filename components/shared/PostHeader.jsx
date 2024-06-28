import Link from "next/link";
import { IoSaveOutline } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
function PostHeader() {
    return (
        <section className="flex items-center sticky top-0 z-50 gap-12 justify-between px-6 h-12 bg-base-300">
            <div className="w-full md:w-full">
            <Link href={'/'}>
                {/* <img src="/logo.svg" className="w-12 h-12" alt="" /> */}
                <h2 className="text-2xl">Logo</h2>
                </Link>
            </div>
            
            <div className="flex items-center gap-7">
            {/* <button data-tip="মুছুন" className="px-4 py-2 rounded bg-rose-100 hover:bg-rose-500 hover:text-white text-rose-500 tooltip tooltip-bottom duration-300 flex items-center gap-1"> <MdDeleteOutline size={23} /><span className="hidden  md:block">মুছুন</span></button> */}
                <div className="flex items-center gap-2">
                <button data-tip="খসড়া" className="px-4 py-2 tooltip tooltip-bottom rounded bg-base-100 border border-blue-300 hover:bg-base-200 duration-300 flex items-center gap-1"> <IoSaveOutline size={23} /> <span className="hidden md:block">খসড়া</span></button>
                <button data-tip="প্রকাশ" className="px-4 py-2 tooltip tooltip-bottom rounded bg-gradient hover:from-[darkorchid] hover:to-[darkblue] hover:duration-300 text-white hover:opacity-85 duration-300 flex items-center gap-1"> <LuPencilLine size={23} /> <span className="hidden md:block">প্রকাশ</span></button>
                </div>
              
            </div>
        </section>
    );
}

export default PostHeader;