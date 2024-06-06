import React, { createContext, useState } from 'react';

export const LoaderContext = createContext();

const LoaderState = ({ children }) => {

    const [loading, setLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoaderContext.Provider>
    )
}

export default LoaderState;
