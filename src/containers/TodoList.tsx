import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';
import {filter} from 'lodash'
import * as React from 'react';
import { FC, useContext } from 'react';

import AddItem from '../components/AddItem'
import TodoItem from '../components/TodoItem'
import TodoTitle from '../components/TodoTitle'
import { TodoContext } from '../context/TodoContext'

const TodoList: FC<{}> = (props) => {
    const { todos, updateTodos } = useContext(TodoContext)
    const classes = useStyles()    

    // tslint:disable-next-line: no-console
    console.log('todoContext', todos, updateTodos);

    const renderOpenLists = (isOpen: boolean) => {
        // const filteredList = filter(todos, {isOpen})
        return (
            <>
            <TodoTitle title={'Open'} />
            <div>
                {todos.map( (item: string, index: number ) => {
                    return <TodoItem key={index} index={index} item={item} />
                })}
            </div>
            </>
        ) 
    }

    const renderClosedLists = (isOpen: boolean) => {
        const filteredList = filter(todos, {isOpen: false})
        return (
            <>
            <TodoTitle title={'Closed'} />
            <div>
                {filteredList.map( (item: string, index: number ) => {
                    return <TodoItem key={index} index={index} item={item} />
                })}
            </div>
            </>
        ) 
    }
    
    const renderAddTodoItem = () => {
        return (
            <AddItem />
        )
    }

    return (
        <Card className={classes.card}>
            {renderAddTodoItem()}
            {renderOpenLists(true)}
            {renderClosedLists(false)}
        </Card>
    )
}

const useStyles = makeStyles(theme => ({
    card: {
        margin: 'auto',
        marginTop: '6rem',
        width: '70%',
    }
}))

export default TodoList