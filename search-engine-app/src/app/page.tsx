"use client";
import Results from "@/components/results/Results";
import SearchBar from "@/components/search/SearchBar";
import WordRotate from "@/components/ui/word-rotate";
import { SearchQueryProvider } from "@/context/SearchQueryContext";
import useSearch from "@/hooks/search/useSearch";
import { useState } from "react";

const filterKeyMap: { [key: string]: string } = {
  TKA: "Total Knee",
  THA: "Total Hip",
  General: "General Orthopedic",
  TJA: "Total Joint",
  TSA: "Total Shoulder",
};

const searchPrompts: string[] = [
  "Impact of age and comorbidities on recovery after total joint arthroplasty",
  "Self-reported pain and mobility scores post-hip arthroplasty",
  "Machine learning models for predicting postoperative complications in TJA",
];

const Home = () => {
  const { handleSearchQuery, isLoadingSeachResults, queryResults } =
    useSearch();
  const [filterKeys, setFilterKeys] = useState<string[]>([]);

  const handleAddToFilterKeys = (key: string) => {
    setFilterKeys(
      (prev) =>
        prev.includes(key)
          ? prev.filter((filter) => filter !== key) // Remove the key if it exists
          : [...prev, key] // Add the key if it doesn't exist
    );
  };

  return (
    <SearchQueryProvider
      filterKeys={filterKeys}
      queryResults={queryResults}
      isLoadingQueryResults={isLoadingSeachResults}
    >
      <div
        className={
          !queryResults
            ? `flex items-center justify-center h-screen`
            : `mx-[100px] mt-10`
        }
      >
        <div className="flex flex-col gap-3 w-[650px]">
          {!queryResults ? (
            <div className="flex flex-col gap-2">
              <p className="text-4xl font-medium bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
                Enhanced Pubmed search for Clinicians & Researchers
              </p>
              <p className="text-sm text-gray-600">
                Enhanching Pubmed's searching capabilities for researchers and
                clinicians
              </p>
              <div className="flex gap-5 my-2">
                {searchPrompts.map((prompt, index) => {
                  return (
                    <p
                      onClick={() => handleSearchQuery(prompt)}
                      key={index}
                      className="text-xs border border-1 hover:border-0 transition-all cursor-pointer hover:translate-y-[-0.2rem] hover:bg-blue-100 rounded-lg p-4 leading-relaxed shadow"
                    >
                      {prompt}
                    </p>
                  );
                })}
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className={`flex flex-col`}>
            <SearchBar
              isLoadingQueryResults={isLoadingSeachResults}
              handleSearch={handleSearchQuery}
            />
            {isLoadingSeachResults ? (
              <WordRotate
                className="text-sm bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mt-1"
                words={[
                  "Fetching results...",
                  "Expanding your query...",
                  "Generating results...",
                ]}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* {!queryResults ? (
          <></>
        ) : (
          <div className="flex w-full ">
            <div className="w-[70%]">
              <Results />
            </div>
            <div className="ml-10 w-[30%] mt-5">
              <div className="flex flex-col">
                <p className="text-sm mb-2 text-gray-700">
                  Categories related to {`${queryResults.query}`}
                </p>
                <div className="mt-2 flex flex-wrap gap-2.5">
                  {queryResults.agg_data["tja-agg"].labels.buckets.map(
                    (bucket, index) => {
                      return (
                        <div
                          onClick={() => handleAddToFilterKeys(bucket.key)}
                          className={
                            filterKeys.includes(bucket.key)
                              ? `w-fit px-3 py-1 rounded-lg text-xs text-gray-700 transition-all cursor-pointer
                                   bg-gradient-to-r from-blue-400 to-blue-500
                                   text-white`
                              : `w-fit px-3 py-1 bg-gray-100 rounded-lg text-xs text-gray-700 transition-all cursor-pointer
                                   hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500
                                   hover:text-white`
                          }
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
        )} */}
      </div>
    </SearchQueryProvider>
  );
};

export default Home;
