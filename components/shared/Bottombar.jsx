import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoBookmarkOutline } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { RiHome2Line, RiMenu4Line } from "react-icons/ri";

function BottomBar() {
    // active btn
    const [active,setActive] = useState('1')
    
    return (
        <section className="flex justify-center">
            <section className="fixed z-50 max-w-96 mx-auto bg-gradient rounded-t-xl sm:rounded-full bottom-0 sm:bottom-2 md:bottom-4 w-full p-0.5">
            <div className="flex items-center rounded-t-xl sm:rounded-full bg-base-100 justify-center">
                <label htmlFor="my-drawer" className={`active w-full flex justify-center items-center flex-col py-1 border-r border-black`} href={`#`}>
                <RiMenu4Line className="text-xl" />
                <span className="text-[8px]">Menu</span>
                </label>
                <Link className={`active w-full flex justify-center items-center flex-col py-1 border-r border-black`} href={`#`}>
                <LuBell className="text-xl" />
                <span className="text-[8px]">Notify</span>
                </Link>
                <Link className={`active w-full flex justify-center items-center flex-col py-1 border-r border-black`} href={`/`}>
                <RiHome2Line className="text-xl" />
                <span className="text-[8px]">Home</span>
                </Link>
                <Link className={`active w-full flex justify-center items-center flex-col py-1 border-r border-black`} href={`#`}>
                <IoBookmarkOutline className="text-xl" />
                <span className="text-[8px]">Saved</span>
                </Link>
                <Link className={`active w-full flex justify-center items-center flex-col py-1`} href={`/user/12`}>
                <CgProfile className="text-xl" />
                <span className="text-[8px]">Profile</span>
                </Link>
            </div>
        </section>
        </section>
    );
}

export default BottomBar;