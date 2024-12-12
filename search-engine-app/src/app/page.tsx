"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        {/* Search Bar */}
        <div className="relative">
          <Input
            type="search"
            placeholder="Search..."
            className="pr-10"
            onChange={(e) => console.log(e.target.value)}
          />
          <Button
            type="submit"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white"
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
