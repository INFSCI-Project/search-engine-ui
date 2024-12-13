import { SearchQueryResponseType } from "@/types/api";

interface ResultsDisplayProps {
  queryResults: SearchQueryResponseType;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ queryResults }) => {
  return (
    <div className="flex flex-col gap-5">
      {queryResults.results.slice(0, 10).map((result, index) => {
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
      <div className=""></div>
    </div>
  );
};

export default ResultsDisplay;
