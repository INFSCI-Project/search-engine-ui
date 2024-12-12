"use client";
import SearchBar from "@/components/search/SearchBar";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-[550px]">
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
