import _ from 'lodash'
import * as React from 'react';
import { useState } from 'react';
import TodoTitle from './TodoTitle'

interface IProps {
    isOpen: boolean
}

interface IList {
    value: string,
    isOpen: boolean
}

const TodoItem = (initialItem: string) => {
    const [ item, setItem ] = useState(initialItem)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value)
    }

    return (
        <input value={item} onChange={onChangeHandler} />
    )
}

const TodoList = (props: IProps) => {
    const title = props.isOpen ? 'Open' : 'Closed'
    const list = useList([])

    const renderLists = (isOpen: boolean) => {
        const filteredList = _.filter(list, {isOpen})
        return (
            <div>
                {filteredList.value}
                <input value={} onChange={}
            </div>
        ) 
    }

    return (
        <div>
            <TodoTitle title={title} />
            <div> 
                {renderLists(isOpen)}
            </div>
        </div>
    )
}

const useList = (value: IList[]) => {
    const [ list, setList ] = useState(value)

    return value
}

export default TodoList