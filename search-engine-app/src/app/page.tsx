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
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col w-[650px]">
          <SearchBar
            isLoadingQueryResults={isLoadingSeachResults}
            handleSearch={handleSearchQuery}
          />
          <Results />
        </div>
      </div>
    </SearchQueryProvider>
  );
};

export default Home;
