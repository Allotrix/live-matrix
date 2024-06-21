import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchState = ({ children }) => {

    // Global state management for the search bar
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchState;
