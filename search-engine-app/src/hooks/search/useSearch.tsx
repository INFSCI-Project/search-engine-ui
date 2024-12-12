import { SearchQueryResponseType } from "@/types/api";
import axios from "axios";
import { useState } from "react";

const useSearch = () => {
  const [isLoadingSeachResults, setisLoadingSeachResults] =
    useState<boolean>(false);
  const handleSearchQuery = async (search_query: string) => {
    try {
      setisLoadingSeachResults(true);
      const response = await axios.post("http://127.0.0.1:3000/search", {
        query: `${search_query}`,
      });
      const data = response.data as SearchQueryResponseType;
      setisLoadingSeachResults(false);
      console.log(data.results);
    } catch (err) {
      setisLoadingSeachResults(false);
      console.log(err);
    }
  };
  return { handleSearchQuery, isLoadingSeachResults };
};

export default useSearch;
