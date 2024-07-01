import useGetUser from "@/hooks/useGetUser";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import Search from "../Sections/Search/Search";
import SearchResults from "../Sections/Search/SearchResults";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1598187468.
const SearchModal = () => {
  const [showSearch, setShowSearch] = useState(false);
  // user
  const [user, isError, isLoading, isSuccess] = useGetUser();
  // input change
  const [input, setInput] = useState("");
  return (
    <dialog id="my_modal_2" className="modal ">
      <div className="modal-box h-dvh min-h-fit4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">Search</h3>
          <form method="dialog" className=" my-2">
            <button className="px-4 py-1 rounded-full border">Close</button>
          </form>
        </div>
        <div className="flex items-center gap-1 relative">
          <div className="w-full">
            {input?.length ? (
              <button
                onClick={() => setInput("")}
                className="absolute right-20 hover:bg-zinc-200 hover:rounded-full px-2 py-2"
              >
                <CgClose />
              </button>
            ) : (
              ""
            )}
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setShowSearch(true)}
              placeholder="Search..."
              autoComplete="off"
              className="input rounded-full input-bordered w-full z-30 input-sm"
              type="text"
              name="search"
              id="search"
            />
            {input?.length ? (
              <SearchResults />
            ) : (
              <Search
                showSearch={showSearch}
                setShowSearch={setShowSearch}
                input={input}
                setInput={setInput}
              />
            )}

            <button className="py-1 bg-gradient text-white rounded-full px-4 absolute right-0">
              Search
            </button>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button className="">Close</button>
      </form>
    </dialog>
  );
};
export default SearchModal;
