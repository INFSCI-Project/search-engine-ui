"use client";
import Results from "@/components/results/Results";
import SearchBar from "@/components/search/SearchBar";
import { SearchQueryProvider } from "@/context/SearchQueryContext";
import useSearch from "@/hooks/search/useSearch";

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
            <div
              className="w-[70%]
        "
            >
              <Results />
            </div>
            <div className="ml-10 w-[30%] mt-5">Hi there</div>
          </div>
        )}
      </div>
    </SearchQueryProvider>
  );
};

export default Home;
