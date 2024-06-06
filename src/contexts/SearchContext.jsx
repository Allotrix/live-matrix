import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchState = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchState;