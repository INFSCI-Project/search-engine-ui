import { queryResultsAtom, queryRetrievalTimeAtom } from "@/lib/atom";
import { SearchQueryResponseType } from "@/types/api";
import axios from "axios";
import { useAtom } from "jotai";
import { useState } from "react";

const useSearch = () => {
  const [isLoadingSeachResults, setisLoadingSeachResults] =
    useState<boolean>(false);
  const [{ queryResults }, setQueryResults] = useAtom(queryResultsAtom);
  const [{ retrieval_time }, setQueryRetrievalTime] = useAtom(
    queryRetrievalTimeAtom
  );
  const handleSearchQuery = async (search_query: string) => {
    try {
      setisLoadingSeachResults(true);
      const start_time = performance.now();

      // fetching response from server
      const response = await axios.post("http://127.0.0.1:3000/search", {
        query: `${search_query}`,
      });

      // calculating query search time
      const end_time = performance.now();
      const duration_in_seconds = (end_time - start_time) / 1000;
      const duration_in_minutes = (duration_in_seconds / 60).toFixed(2);
      console.log(duration_in_minutes);
      setQueryRetrievalTime({
        retrieval_time: duration_in_minutes,
      });

      // transforming and typecasing response data from the server
      const data = response.data as SearchQueryResponseType;
      setQueryResults({ queryResults: data });
      setisLoadingSeachResults(false);

      // redirection to the results page
      window.location.href = "/results";
    } catch (err) {
      // alter for errors during search results
      setisLoadingSeachResults(false);
      console.log(err);
    }
  };
  return {
    handleSearchQuery,
    isLoadingSeachResults,
    queryResults,
    retrieval_time,
  };
};

export default useSearch;
