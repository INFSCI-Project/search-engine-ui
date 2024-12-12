import { useSearchQueryContext } from "@/context/SearchQueryContext";
import ResultsDisplay from "./ResultsDisplay";

const Results = () => {
  const { queryResults, isLoadingQueryResults } = useSearchQueryContext();
  console.log(queryResults);
  return (
    <div>
      {!queryResults ? (
        <>{isLoadingQueryResults ? <p>Fetching Results</p> : <></>}</>
      ) : (
        <ResultsDisplay queryResults={queryResults} />
      )}
    </div>
  );
};

export default Results;
