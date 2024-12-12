"use client";

import { SearchQueryResponseType } from "@/types/api";
import React, { createContext, useContext } from "react";

// Define the context type
interface SearchQueryContextType {
  queryResults: SearchQueryResponseType | null;
}

// Create the context
const SearchQueryContext = createContext<SearchQueryContextType | undefined>(
  undefined
);

// Provider Props
interface SearchQueryProviderProps {
  children: React.ReactNode;
  queryResults: SearchQueryResponseType | null;
}

// Provider Component
export const SearchQueryProvider = ({
  children,
  queryResults,
}: SearchQueryProviderProps) => {
  return (
    <SearchQueryContext.Provider value={{ queryResults }}>
      {children}
    </SearchQueryContext.Provider>
  );
};

// Custom hook to use the context
export const useSearchQuery = (): SearchQueryContextType => {
  const context = useContext(SearchQueryContext);
  if (context === undefined) {
    throw new Error("useSearchQuery must be used within a SearchQueryProvider");
  }
  return context;
};
