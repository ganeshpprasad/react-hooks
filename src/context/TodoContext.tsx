import React, { createContext, useReducer} from 'react'

export const TodoContext = createContext<{ todos: string[], updateTodos: (newTodo: string) => void}>({
    todos: [],
    updateTodos: (newTodo: string) => null,
})

interface IAction { type: string, payload: string }

const ADD_TODO = 'add_todo'

const reducer = (state: string[], action: IAction) => {
    switch (action.type) {
        case ADD_TODO :
            const newState = state.concat(action.payload)
            return newState
        default:
            return state
    }
}

const initialState: string[] = []

export const TodoContextProvider = ({children}: any) => {
    const [todoState, setTodoState] = useReducer<React.Reducer<string[], IAction>>(reducer, initialState)

    const updateTodos = (newTodo: any) => {
        // tslint:disable-next-line: no-console
        console.log('whats happending', newTodo);
        setTodoState({ type: ADD_TODO, payload: newTodo })
    }

    return (<TodoContext.Provider
            value={{
                todos: todoState,
                updateTodos
            }}
        >
            {children}
        </TodoContext.Provider>)
}