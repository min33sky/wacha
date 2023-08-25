'use client';

import { createContext, useContext, useState } from 'react';

interface SearchContextProps {
  searchActive: boolean;
  setSearchActive: (value: boolean) => void;
}

export const SearchContext = createContext<SearchContextProps>({
  searchActive: false,
  setSearchActive: () => {},
});

export default function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
}
