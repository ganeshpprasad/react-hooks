import { Container } from '@material-ui/core'
import * as React from 'react'

import '../App.css';
import { Search } from '../containers/Search'
import TodoList from '../containers/TodoList'
import { TodoContextProvider } from '../context/TodoContext'

const Main = () => {


    return (
      <TodoContextProvider>
        <Container className="App">
          <Search />
          <TodoList />
        </Container>
      </TodoContextProvider>
    )
}

export default Main

