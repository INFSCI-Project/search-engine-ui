import { SearchQueryResponseType } from "@/types/api";

interface ResultsProps {
  queryResults: SearchQueryResponseType | null;
}
const Results: React.FC<ResultsProps> = ({ queryResults }) => {
  return <div>{queryResults ? <></> : <div>Fetched Results</div>}</div>;
};

export default Results;
