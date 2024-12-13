import { useSearchQueryContext } from "@/context/SearchQueryContext";
import ResultsDisplay from "./ResultsDisplay";

const Results = () => {
  const { queryResults, isLoadingQueryResults } = useSearchQueryContext();

  return (
    <div>
      {!queryResults ? (
        <>{isLoadingQueryResults ? <p>Fetching Results</p> : <></>}</>
      ) : (
        <div className={isLoadingQueryResults ? "mt-1" : "mt-5"}>
          <div className="flex flex-col mb-4 gap-2">
            <p className="flex gap-1 text-sm text-gray-500">
              {`About ${queryResults.agg_data["tja-agg"].doc_count} results (3.07 minutes)`}
            </p>
          </div>
          <ResultsDisplay queryResults={queryResults} />
        </div>
      )}
    </div>
  );
};

export default Results;
