"use client";
import SearchBar from "@/components/search/SearchBar";
import useSearch from "@/hooks/search/useSearch";

const Home = () => {
  const { handleSearchQuery, isLoadingSeachResults } = useSearch();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-[550px]">
        <SearchBar
          isLoadingQueryResults={isLoadingSeachResults}
          handleSearch={handleSearchQuery}
        />
      </div>
    </div>
  );
};

export default Home;
