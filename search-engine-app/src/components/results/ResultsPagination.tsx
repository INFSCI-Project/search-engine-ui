import { Dispatch, SetStateAction } from "react";
import ReactPaginate from "react-paginate";

interface ResultsPaginationProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  pageCount: number;
}

const ResultsPagination: React.FC<ResultsPaginationProps> = ({
  pageCount,
  setCurrentPage,
}) => {
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected); // Update currentPage on page change
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      breakLabel="..."
      nextLabel="next"
      previousLabel="back"
      onPageChange={handlePageChange}
      pageRangeDisplayed={2} // Show 5 pages at a time
      marginPagesDisplayed={2} // Always show 2 pages at the start and end
      renderOnZeroPageCount={null}
      containerClassName="flex items-center gap-2 mt-4" // Flex container for pagination
      pageClassName="cursor-pointer py-2 px-4 text-sm font-medium border rounded-md hover:bg-gray-200 transition-all" // Page number button styling
      pageLinkClassName="block text-center" // Centers the page numbers
      activeClassName="bg-blue-600 text-white" // Active page button styling
      disabledClassName="text-gray-400 cursor-not-allowed" // Disabled button styling
      previousClassName="cursor-pointer py-2 px-4 text-sm font-medium border rounded-md hover:bg-gray-200 transition-all" // Previous button styling
      nextClassName="cursor-pointer py-2 px-4 text-sm font-medium border rounded-md hover:bg-gray-200 transition-all" // Next button styling
    />
  );
};

export default ResultsPagination;
