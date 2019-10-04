import React from 'react';
import './App.css';
import axios from 'axios';
import { useAxios } from './hooks/useAxios.js';

function App() {
	const [ data, setData ] = useAxios([]);
	console.log(data);
	return <div className="App">{}</div>;
}

export default App;

