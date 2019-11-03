import { IconButton } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import * as React from 'react';
import { FC, useState } from 'react';
import { SearchContext } from '../context/SearchContext'

const SEARCH_PLACEHOLDER = 'Search for items'

export const Search: FC = () => {
    const { searchTermChanged } = React.useContext(SearchContext)
    const { searchTerm, setTerm } = useSearchTerm('')

    const searchHandler = (e: any) => {
        e.preventDefault()
        searchTermChanged(searchTerm)
    }

    const styles = useStyles()
    return (
        <form onSubmit={searchHandler}>
        <Paper className={styles.paper}>
            <InputBase
                className={styles.textField}
                // margin="normal"
                value={searchTerm}
                onChange={setTerm}
                placeholder={SEARCH_PLACEHOLDER}
                // variant="outlined"
                // label="Search"
            />
            <IconButton aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
        </form> 
)}

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        width: '50%',
    },
    textField: {
        flexGrow: 1,
        marginTop: theme.spacing(0),
        paddingLeft: theme.spacing(1)
    } 
}))

const useSearchTerm = (initialValue: string) => {
    const [searchTerm, setSearchTerm] = useState(initialValue)

    const setTerm = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value)
    }

    return { searchTerm, setTerm }
}