import * as React from 'react';
import { useState } from 'react';

export const Search = () => {

    // const [searchTerm, setSearchTerm] = useState('') 
    const { searchTerm, setTerm } = useSearchTerm('')

    // tslint:disable-next-line: no-console
    console.log('return', searchTerm);
    return (
        
        <div>
            <input value={searchTerm} onChange={setTerm}/>
        </div>
    )
}

const useSearchTerm = (initialValue: string) => {
    const [ searchTerm, setSearchTerm ] = useState(initialValue)

    const setTerm = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value)
    }

    return {searchTerm, setTerm}
}