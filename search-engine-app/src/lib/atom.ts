import { AtomQueryState } from "@/types/atom";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const userAtom = atomWithStorage<AtomQueryState>("userAtomState", {
  queryResults: null,
});

export const useUserAtom = () => useAtom(userAtom);
