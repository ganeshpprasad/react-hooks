import Typography from '@material-ui/core/Typography';
import * as React from 'react';

interface IProps {
    title: string
}

const TodoTitle = (props: IProps) => {
    return (
        <Typography variant="h3" gutterBottom={true}>
            {props.title}
        </Typography>
    )
}

export default TodoTitle