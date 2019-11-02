import { Checkbox, TextField } from '@material-ui/core';
import * as React from 'react';
import { FC, useState } from 'react';

const TodoItem: FC<{ item: string, key: number }> = ({ item, key }) => {
    const [val, setItem] = useState(item)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value)
    }

    return (
        <>
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
                style={{marginTop: 0}}
                // className={classes.textField}
                margin="normal"
                // variant="outlined"
            /> 
        </> 
    )
}

export default TodoItem