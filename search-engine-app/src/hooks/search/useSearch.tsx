import { queryResultsAtom } from "@/lib/atom";
import { SearchQueryResponseType } from "@/types/api";
import axios from "axios";
import { useAtom } from "jotai";
import { useState } from "react";

const useSearch = () => {
  const [isLoadingSeachResults, setisLoadingSeachResults] =
    useState<boolean>(false);
  const [{ queryResults }, setQueryResults] = useAtom(queryResultsAtom);
  const handleSearchQuery = async (search_query: string) => {
    try {
      setisLoadingSeachResults(true);
      const response = await axios.post("http://127.0.0.1:3000/search", {
        query: `${search_query}`,
      });
      const data = response.data as SearchQueryResponseType;
      setQueryResults({ queryResults: data });
      setisLoadingSeachResults(false);
      window.location.href = "/results";
    } catch (err) {
      setisLoadingSeachResults(false);
      console.log(err);
    }
  };
  return { handleSearchQuery, isLoadingSeachResults, queryResults };
};

export default useSearch;
