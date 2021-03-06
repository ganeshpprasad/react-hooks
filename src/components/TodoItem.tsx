import { Checkbox, TextField } from '@material-ui/core';
import * as React from 'react';
import { FC, useState } from 'react';

const TodoItem: FC<{ item: string, index: number }> = ({ item, index}) => {
    const [val, setItem] = useState(item)

    // tslint:disable-next-line: no-console
    console.log('key,', index);
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value)
    }

    return (
        <div key={index}>
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
        </div> 
    )
}

export default TodoItem