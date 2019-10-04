import React from 'react';
import './App.css';
import axios from 'axios'
import CardList from './components/PlayerCardList';

class App extends React.Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	componentDidMount() {
		const url = 'http://localhost:5000/api/players';
		axios.get(url).then((res) => {
			this.setState({ data: res.data });
		});
	}

	render() {
		return (
			<div className="App">
				<CardList data={this.state.data} />
			</div>
		);
	}
}


export default App;

