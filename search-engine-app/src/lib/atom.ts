import { AtomQueryState, AtomRetrievalTime } from "@/types/atom";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const queryResultsAtom = atomWithStorage<AtomQueryState>(
  "userAtomQueryState",
  {
    queryResults: null,
  }
);

export const queryRetrievalTimeAtom = atomWithStorage<AtomRetrievalTime>(
  "useAtomRetrievalState",
  {
    retrieval_time: null,
  }
);

export const useQueryResultsAtom = () => useAtom(queryResultsAtom);
export const useQueryRetrievalAtom = () => useAtom(queryRetrievalTimeAtom);
