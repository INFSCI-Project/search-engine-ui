import { SearchQueryResponseType } from "@/types/api";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context value type
interface SearchQueryContextValue {
  queryResults: SearchQueryResponseType | null;
  setQueryResults: (results: SearchQueryResponseType | null) => void;
}

// Create the context
const SearchQueryContext = createContext<SearchQueryContextValue | undefined>(
  undefined
);

// Provider Props
interface SearchQueryProviderProps {
  children: ReactNode;
}

// Create the provider component
export const SearchQueryProvider: React.FC<SearchQueryProviderProps> = ({
  children,
}) => {
  const [queryResults, setQueryResults] =
    useState<SearchQueryResponseType | null>(null);

  return (
    <SearchQueryContext.Provider value={{ queryResults, setQueryResults }}>
      {children}
    </SearchQueryContext.Provider>
  );
};

// Custom hook to use the context
export const useSearchQueryContext = (): SearchQueryContextValue => {
  const context = useContext(SearchQueryContext);
  if (!context) {
    throw new Error(
      "useSearchQueryContext must be used within a SearchQueryProvider"
    );
  }
  return context;
};
