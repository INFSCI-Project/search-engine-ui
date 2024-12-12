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
      setisLoadingSeachResults(false);
      console.log(response);
    } catch (err) {
      setisLoadingSeachResults(false);
      console.log(err);
    }
  };
  return { handleSearchQuery, isLoadingSeachResults };
};

export default useSearch;
