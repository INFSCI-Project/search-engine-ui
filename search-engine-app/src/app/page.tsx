"use client";
import SearchBar from "@/components/search/SearchBar";
import { SearchQueryProvider } from "@/context/SearchQueryContext";
import useSearch from "@/hooks/search/useSearch";

const Home = () => {
  const { handleSearchQuery, isLoadingSeachResults, queryResults } =
    useSearch();
  return (
    <SearchQueryProvider queryResults={queryResults}>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col w-[550px]">
          <SearchBar
            isLoadingQueryResults={isLoadingSeachResults}
            handleSearch={handleSearchQuery}
          />
        </div>
      </div>
    </SearchQueryProvider>
  );
};

export default Home;
