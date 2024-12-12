"use client";
import SearchBar from "@/components/search/SearchBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

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
