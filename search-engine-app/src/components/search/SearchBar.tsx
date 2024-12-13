import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";

interface SearchBarProps {
  handleSearch: (search_query: string) => Promise<void>;
  isLoadingQueryResults: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  handleSearch,
  isLoadingQueryResults,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="relative w-full">
      <Input
        type="search"
        placeholder="Any thing you wanna know..."
        className="pr-10 bg-gray-100 h-10"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Button
        onClick={() => void handleSearch(searchQuery)}
        type="submit"
        size="sm"
        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0 bg-white text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
      >
        {isLoadingQueryResults ? (
          <Spinner size="small" className="border-t-blue-500" />
        ) : (
          <>
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default SearchBar;
