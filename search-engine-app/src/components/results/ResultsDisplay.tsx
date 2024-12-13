import { SearchQueryResponseType } from "@/types/api";
import { useMemo, useState } from "react";
import ResultsPagination from "./ResultsPagination";
import { useSearchQueryContext } from "@/context/SearchQueryContext";

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
  const { filterKeys } = useSearchQueryContext();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 5;

  const filteredResults = useMemo(() => {
    if (filterKeys.length === 0) {
      return queryResults.results; // No filtering if no filter keys
    } else {
      return queryResults.results.filter((result) =>
        filterKeys.every((key) =>
          result.source.entities.some((entity) => entity.entity === key)
        )
      );
    }
  }, [filterKeys, queryResults.results]);

  const pageCount = Math.ceil(filteredResults.length / itemsPerPage);

  const currentPageResults = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = (currentPage + 1) * itemsPerPage;
    return filteredResults.slice(startIndex, endIndex);
  }, [currentPage, filteredResults, itemsPerPage]);

  return (
    <div className="flex flex-col gap-6">
      {currentPageResults.map((result, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-xs cursor-pointer text-gray-700 underline">
                {`${result.source.doi}`}
              </p>
              <a
                href={result.source.doi}
                className="font-semibold text-lg cursor-pointer transition-all hover:text-blue-700 hover:underline"
              >
                {result.source.title}
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-extralight text-sm text-gray-500">
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
