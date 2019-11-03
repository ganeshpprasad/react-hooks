import React, { createContext, useState } from 'react'

export const SearchContext = createContext({
    searchTerm: '',
    // tslint:disable-next-line: no-empty
    searchTermChanged: (newSearchTerm: any) => {},
})

// fn to change the context values

export const searchContextProvider= ({ children }: any) => {
    const [searchTerm, setSearchTerm] = useState<string>('')

    const searchTermChanged = (newSearchTerm: any) => {
        setSearchTerm(newSearchTerm)
    }

    return (<SearchContext.Provider
        value={{
            searchTerm,
            searchTermChanged,
        }}
    >
        {children}
    </SearchContext.Provider>)
}