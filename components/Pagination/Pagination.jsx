import { useState } from "react";
import PageItem from "react-js-pagination";

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  return (
    <div className="flex justify-center w-full my-12">
      <PageItem
        activePage={activePage}
        itemsCountPerPage={1}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Pagination
