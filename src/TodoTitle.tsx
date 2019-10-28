import * as React from 'react';

interface IProps {
    title: string
}

const TodoTitle = (props: IProps) => {
    return (
        <div>{props.title}</div>
    )
}

export default TodoTitle