import * as React from 'react';
import TodoList from './TodoList'

const TodoListCon = (props: React.Props<string>) => {
    return (
        <div>
          <TodoList isOpen={true} />
          <TodoList isOpen={false} />
        </div>
    )
}

export default TodoListCon