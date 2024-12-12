import { SearchQueryResponseType } from "@/types/api";

interface ResultsLayoutProps {
  queryResults: SearchQueryResponseType | null;
}
const ResultsLayout: React.FC<ResultsLayoutProps> = ({ queryResults }) => {
  return <div>{queryResults ? <></> : <div>Fetched Results</div>}</div>;
};

export default ResultsLayout;
