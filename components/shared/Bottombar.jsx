import Link from "next/link";
import { useState } from "react";

function Bottombar() {
    // active btn
    const [active,setActive] = useState('1')
    
    return (
        <section className="fixed z-50 md:hidden bottom-0 w-full">
            <div className="flex items-center justify-center">
                <Link className={`active w-full flex justify-center bg-base-300 py-3 border-r border-black`} href={`#`}>Home</Link>
                <Link className={`active w-full flex justify-center bg-base-300 py-3 border-r border-black`} href={`#`}>Home</Link>
                <Link className={`active w-full flex justify-center bg-base-300 py-3 border-r border-black`} href={`#`}>Home</Link>
                <Link className={`active w-full flex justify-center bg-base-300 py-3 border-r border-black`} href={`#`}>Home</Link>
                <Link className={`active w-full flex justify-center bg-base-300 py-3`} href={`/`}>Home</Link>
            </div>
        </section>
    );
}

export default Bottombar;