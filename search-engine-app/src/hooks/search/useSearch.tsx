import { SearchQueryResponseType } from "@/types/api";
import axios from "axios";
import { useState } from "react";

const useSearch = () => {
  const [isLoadingSeachResults, setisLoadingSeachResults] =
    useState<boolean>(false);
  const [queryResults, setQueryResults] =
    useState<SearchQueryResponseType | null>(null);
  const handleSearchQuery = async (search_query: string) => {
    try {
      setisLoadingSeachResults(true);
      const response = await axios.post("http://127.0.0.1:3000/search", {
        query: `${search_query}`,
      });
      const data = response.data as SearchQueryResponseType;
      setQueryResults(data);
      setisLoadingSeachResults(false);
    } catch (err) {
      setisLoadingSeachResults(false);
      console.log(err);
    }
  };
  return { handleSearchQuery, isLoadingSeachResults, queryResults };
};

export default useSearch;
