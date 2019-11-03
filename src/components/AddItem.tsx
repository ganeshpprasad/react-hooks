import { Checkbox, TextField } from '@material-ui/core';
import * as React from 'react';
import { FC, useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext'

const ADD_ITEM = 'Add Items'

const AddItem: FC<{ }> = ({ }) => {
    const [val, setItem] = useState('')
    const { updateTodos } = useContext(TodoContext)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value)
    }

    const submitHandler = (e: any) => {
        // tslint:disable-next-line: no-console
        console.log('effecting', val);
        e.preventDefault()
        updateTodos(val)
        setItem('')
    }

    return (
        <form onSubmit={submitHandler}>
            <Checkbox
                checked={false}
                // onChange={handleChange('checkedA')}
                inputProps={{
                    'aria-label': 'primary checkbox',
                }}
            />
            <TextField
                value={val}
                onChange={onChangeHandler}
                style={{ marginTop: 0 }}
                // className={classes.textField}
                margin="normal"
                // variant="outlined"
                placeholder={ADD_ITEM}
            />
        </form>
    )
}

export default AddItem 