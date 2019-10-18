import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button'
import Title from './Title'
import Todo from './Todo'

function App() {
	return (
		<div className="App">
		<header className="App-header">
		<Title />
		<Todo />
		<Button />
		Hooks and context
		</header>
		</div>
		);
	}
	
	export default App;
	