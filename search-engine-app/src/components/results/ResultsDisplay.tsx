import { SearchQueryResponseType } from "@/types/api";

interface ResultsDisplayProps {
  queryResults: SearchQueryResponseType;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ queryResults }) => {
  return (
    <div className="flex flex-col mt-5 gap-5">
      {queryResults.results.slice(0, 3).map((result, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <p className="font-semibold text-lg">{result.source.title}</p>
            <p className="font-extralight text-sm text-gray-500">
              <span className="text-black">Abstract :</span>{" "}
              {result.source.abstract.slice(0, 300) + " ..."}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ResultsDisplay;
