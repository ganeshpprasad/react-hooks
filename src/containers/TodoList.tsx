import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';
import {filter} from 'lodash'
import * as React from 'react';
import { FC } from 'react';
import { useState } from 'react';
import TodoItem from '../components/TodoItem'
import TodoTitle from '../components/TodoTitle'
// interface IProps { }

interface IList {
    value: string,
    isOpen: boolean,
}

const TodoList: FC<{}> = (props) => {
    const list = useList([ { value: 'To do man',  isOpen: true }, { value: 'done man',  isOpen: false} ])
    const classes = useStyles()    
    const renderOpenLists = (isOpen: boolean) => {
        const filteredList = filter(list, {isOpen})
        return (
            <>
            <TodoTitle title={'Open'} />
            <div>
                {filteredList.map( (item: IList, index: number ) => {
                    return <TodoItem key={index} item={item.value} />
                })}
            </div>
            </>
        ) 
    }

    const renderClosedLists = (isOpen: boolean) => {
        const filteredList = filter(list, {isOpen: false})
        return (
            <>
            <TodoTitle title={'Closed'} />
            <div>
                {filteredList.map( (item: IList, index: number ) => {
                    return <TodoItem key={index} item={item.value} />
                })}
            </div>
            </>
        ) 
    }

    return (
        <Card className={classes.card}>
            {renderOpenLists(true)}
            {renderClosedLists(false)}
        </Card>
    )
}

const useList = (value: IList[]) => {
    const [ list ] = useState(value)

    return list 
}

const useStyles = makeStyles(theme => ({
    card: {
        margin: 'auto',
        marginTop: '6rem',
        width: '70%',
    }
}))

export default TodoList