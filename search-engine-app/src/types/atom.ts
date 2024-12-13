import { SearchQueryResponseType } from "./api";

interface AtomQueryState {
  queryResults: SearchQueryResponseType | null;
}

interface AtomRetrievalTime {
  retrieval_time: string | null;
}

export { type AtomQueryState, type AtomRetrievalTime };
