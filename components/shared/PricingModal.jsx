import Pricing from "../Sections/Pricing/Pricing";

function PricingModal() {

    return (
        <div className="w-full">
<dialog id="pricing" className="modal">
  <div className="modal-box min-w-fit lg:w-[800px] max-w-4xl ">
  <div className="relative w-full">
  <form method="dialog" className="absolute right-2 top-2 z-40">
  <button className="px-4 py-1 rounded-full border">Close</button>
  </form>

  </div>
   <Pricing />
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
        </div>
    );
}

export default PricingModal;