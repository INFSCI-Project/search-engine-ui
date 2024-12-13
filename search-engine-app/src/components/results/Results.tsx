import { useSearchQueryContext } from "@/context/SearchQueryContext";
import { useEffect, useState } from "react";
import ResultsDisplay from "./ResultsDisplay";

const Results = () => {
  const { queryResults, isLoadingQueryResults } = useSearchQueryContext();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (queryResults || isLoadingQueryResults) {
      setFadeIn(true);
    }
  }, [queryResults, isLoadingQueryResults]);

  return (
    <div>
      {!queryResults ? (
        <div
          className={`transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {isLoadingQueryResults ? <p>Fetching Results</p> : <></>}
        </div>
      ) : (
        <div
          className={`transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={
              isLoadingQueryResults
                ? "flex flex-col mb-4 gap-2 mt-2"
                : "flex flex-col mb-4 gap-2 mt-5"
            }
          >
            <p className="flex gap-1 text-sm text-gray-500">
              {`About ${queryResults.total_results} results (3.07 minutes)`}
            </p>
          </div>
          <ResultsDisplay queryResults={queryResults} />
        </div>
      )}
    </div>
  );
};

export default Results;
