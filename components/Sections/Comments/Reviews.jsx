import { useState } from "react";
import { BsReply } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { GoHeart } from "react-icons/go";
function Reviews() {
    const [like,setLike] = useState(false)
    return (
        <div>
 <div className="flex flex-col gap-3">
            

            <div className="flex flex-col gap-4  p-4">
                {/* <!-- Profile and Rating --> */}
                <div className="flex justify justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="w-12 flex items-center justify-center h-12 text-center rounded-full bg-yellow-500">ম</div>
                        <span className="font-bold">মেজোকাকু</span>
                        <span className="text-xs text-zinc-600">Feb 13, 2021</span>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        
                    </div>
                </div>
            
                <div>
                হোক বা অনুষ্ঠানের আয়োজনেই হোক। আর মেজোকাকুর মাথায় আসেও নানা অবাক করা আইডিয়া একবার আমার জন্মদিনে বাড়িতেই বসিয়েছিলেন ম্যাজিকের আসর। মঞ্চ তৈরি করে, আলোর ঝিকিমিকি
                </div>
            
                <div className="flex justify-start items-center gap-1 text-base">
                    1k
                   <button onClick={()=>setLike(!like)} className="flex pr-2 gap-1 text-base items-center">
                    {
                        like ?   <FcLike size={20} />:<GoHeart size={20} />
                    }
                  Like{like?'d':''}
                    </button>
                    <button className="p-1 px-2 flex items-center gap-1 text-base"><BsReply /> Reply</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Reviews;