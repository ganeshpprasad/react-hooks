import * as React from 'react';
import Main from './screens/Main'

class App extends React.Component {
  public render() {
    return (
      <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Main />
      </>
    );
  }
}

export default App;
