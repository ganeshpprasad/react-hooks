import { IconButton } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import * as React from 'react';
import { ChangeEvent, FC } from 'react';

interface ISearchProps {
    searchTerm: string
    setTerm: (e: ChangeEvent<HTMLInputElement>) => void
}

const SEARCH_PLACEHOLDER = 'Search for items'

export const Search: FC<ISearchProps> = ({ searchTerm, setTerm }) => {
    const styles = useStyles()
    return (
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