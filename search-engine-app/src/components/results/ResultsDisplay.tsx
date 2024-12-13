import { SearchQueryResponseType } from "@/types/api";
import { useState } from "react";
import ResultsPagination from "./ResultsPagination";

interface ResultsDisplayProps {
  queryResults: SearchQueryResponseType;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ queryResults }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 5;
  // page count
  const pageCount = Math.ceil(queryResults.results.length / itemsPerPage);
  // dynamic results display
  const currentResults = queryResults.results.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <div className="flex flex-col gap-5">
      {currentResults.map((result, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-xs cursor-pointer text-gray-700">
                {result.source.doi}
              </p>
              <a
                href={result.source.doi}
                className="font-semibold text-lg cursor-pointer transition-all hover:text-blue-800"
              >
                {result.source.title}
              </a>
            </div>
            <p className="font-extralight text-sm text-gray-500">
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-semibold">
                Abstract :
              </span>{" "}
              {result.source.abstract.slice(0, 300) + " ..."}
            </p>
          </div>
        );
      })}
      <div className="pb-10">
        <ResultsPagination
          pageCount={pageCount}
          setCurrentPage={setCurrentPage} // Pass setCurrentPage to pagination component
        />
      </div>
    </div>
  );
};

export default ResultsDisplay;
