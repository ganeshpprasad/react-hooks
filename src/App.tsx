import * as React from 'react';
import './App.css';
import { Search } from './Search'
import TodoListCon from './TodoListCon'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Search />
        <TodoListCon />
      </div>
    );
  }
}

export default App;
