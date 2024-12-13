"use client";
import Results from "@/components/results/Results";
import SearchBar from "@/components/search/SearchBar";
import { SearchQueryProvider } from "@/context/SearchQueryContext";
import useSearch from "@/hooks/search/useSearch";

const filterKeyMap: { [key: string]: string } = {
  TKA: "Total Knee",
  THA: "Total Hip",
  General: "General Orthopedic",
  TJA: "Total Joint",
  TSA: "Total Shoulder",
};

const Home = () => {
  const { handleSearchQuery, isLoadingSeachResults, queryResults } =
    useSearch();
  return (
    <SearchQueryProvider
      queryResults={queryResults}
      isLoadingQueryResults={isLoadingSeachResults}
    >
      <div
        className={
          !queryResults
            ? `flex items-center justify-center h-screen`
            : `mx-[200px] mt-10`
        }
      >
        <div className={`flex flex-col w-[650px]`}>
          <SearchBar
            isLoadingQueryResults={isLoadingSeachResults}
            handleSearch={handleSearchQuery}
          />
        </div>
        {!queryResults ? (
          <></>
        ) : (
          <div className="flex w-full ">
            <div className="w-[70%]">
              <Results />
            </div>
            <div className="ml-10 w-[30%] mt-5">
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">
                  Categories related to {`${queryResults.query}`}
                </p>
                <div className="mt-2 flex flex-wrap gap-2.5">
                  {queryResults.agg_data["tja-agg"].labels.buckets.map(
                    (bucket, index) => {
                      return (
                        <div
                          className="w-fit px-3 py-1 bg-gray-100 rounded-lg text-xs text-gray-700 transition-all cursor-pointer
                                   hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500
                                   hover:text-white"
                          key={index}
                        >
                          {filterKeyMap[bucket.key] || bucket.key}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SearchQueryProvider>
  );
};

export default Home;
