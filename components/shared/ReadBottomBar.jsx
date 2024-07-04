import { TbPremiumRights } from "react-icons/tb";
import { TiArrowBackOutline, TiArrowForwardOutline } from "react-icons/ti";
import PricingModal from "./PricingModal";

function ReadBottomBar() {
  return (
    <div className="sticky bg-base-100 z-50 bottom-0 w-full">
      <div className="flex w-full p-3 gap-4 justify-center text-left float-left">
        {/* Prev btn */}
        <button className="border rounded-full flex truncate px-4 justify-center items-center gap-1">
          <TiArrowBackOutline className="" size={24} />
          আগের পর্ব
        </button>
        <div className="flex items-center">
          {/* Next btn */}
          <button className="border rounded-full flex truncate px-4 justify-center items-center gap-1">
            পরের পর্ব
            <TiArrowForwardOutline className="" size={24} />
          </button>
          {/* Premium btn */}
          <button onClick={()=>document.getElementById('pricing').showModal()} className="text-right bg-gradient text-white px-2 py-1 rounded-full flex truncate items-center gap-1">
            প্যাকেজ কিনুন <TbPremiumRights className="" size={24} />
          </button>
        </div>
      </div>
      <PricingModal />
    </div>
  );
}

export default ReadBottomBar;
