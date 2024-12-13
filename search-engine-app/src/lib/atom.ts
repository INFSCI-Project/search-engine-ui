import { AtomQueryState } from "@/types/atom";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const queryResultsAtom = atomWithStorage<AtomQueryState>(
  "userAtomState",
  {
    queryResults: null,
  }
);

export const useQueryResultsAtom = () => useAtom(queryResultsAtom);
