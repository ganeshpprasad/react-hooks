import { Container } from '@material-ui/core'
import * as React from 'react'
import { useState } from 'react'

import '../App.css';
import { Search } from '../containers/Search'
import TodoList from '../containers/TodoList'

const Main = () => {

    const { searchTerm, setTerm } = useSearchTerm('')

    return (
      <Container className="App">
        <Search searchTerm={searchTerm} setTerm={setTerm} />
        <TodoList />
      </Container>
    )
}

export default Main

const useSearchTerm = (initialValue: string) => {
  const [searchTerm, setSearchTerm] = useState(initialValue)

  const setTerm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value)
  }

  return { searchTerm, setTerm }
}