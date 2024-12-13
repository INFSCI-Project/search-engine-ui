import { SearchQueryResponseType } from "@/types/api";
import { useState } from "react";
import ResultsPagination from "./ResultsPagination";

interface ResultsDisplayProps {
  queryResults: SearchQueryResponseType;
}

const filterKeyMap: { [key: string]: string } = {
  TKA: "Total Knee",
  THA: "Total Hip",
  General: "General Orthopedic",
  TJA: "Total Joint",
  TSA: "Total Shoulder",
};

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

  console.log(queryResults.results[0].source.entities);
  return (
    <div className="flex flex-col gap-6">
      {currentResults.map((result, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-xs cursor-pointer text-gray-700 underline">
                {`${result.source.doi}`}
              </p>
              <a
                href={result.source.doi}
                className="font-semibold text-lg cursor-pointer transition-all hover:text-blue-800 hover:underline"
              >
                {result.source.title}
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-extralight text-sm text-gray-500">
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-semibold">
                  Abstract :
                </span>{" "}
                {result.source.abstract.slice(0, 300) + " ..."}
              </p>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-wrap">
                  {result.source.authors.slice(0, 4).map((author, index) => {
                    return (
                      <p className="text-sm text-gray-700" key={index}>
                        {author}
                      </p>
                    );
                  })}
                  <p>{result.source.authors.length > 4 ? `...` : ""}</p>
                </div>
                <div className="flex text-xs flex-wrap gap-2">
                  {result.source.entities.map((entity, index) => {
                    return (
                      <p
                        className="w-fit px-3 py-1 bg-blue-100 rounded-xl text-xs text-gray-700"
                        key={index}
                      >
                        {filterKeyMap[entity.entity] || entity.entity}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
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
