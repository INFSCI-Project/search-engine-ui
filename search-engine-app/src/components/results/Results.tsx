import { useSearchQueryContext } from "@/context/SearchQueryContext";
import ResultsDisplay from "./ResultsDisplay";

const Results = () => {
  const { queryResults, isLoadingQueryResults } = useSearchQueryContext();
  console.log(queryResults?.agg_data["tja-agg"]);
  return (
    <div>
      {!queryResults ? (
        <>{isLoadingQueryResults ? <p>Fetching Results</p> : <></>}</>
      ) : (
        <div className="mt-5">
          <p className="flex gap-1 mb-3 text-sm bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent ">
            <span className="text-gray-700">Search results :</span>
            <span>{`${queryResults.agg_data["tja-agg"].doc_count} pages`}</span>
          </p>
          <ResultsDisplay queryResults={queryResults} />
        </div>
      )}
    </div>
  );
};

export default Results;
