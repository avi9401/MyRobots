import React, { Component } from 'react';
import CardList from '../components/CardList';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import './App.css'


class App extends Component {
	constructor() {
		super()
		this.state = {
		 robo: [],
		 Searchfield: ''

		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> this.setState({robo: users}));
		
	}

    onSearchChange =(event) => {
    	this.setState({Searchfield: event.target.value})
		
	}
    render() {	
    	const {robo, Searchfield} = this.state;
    	const filteredrobo = robo.filter(robo => {
			return robo.name.toLowerCase().includes(Searchfield.toLowerCase());
		})
		return !robo.length ?
	    <h1 className='tc'>Loading</h1> :
		   (
			  <div className= 'tc'>	
				<h1 className='tc f1 h2'>My Robots</h1>
				<Search SearchChange={this.onSearchChange}/>
				<Scroll>
			    <CardList robo={filteredrobo}/>
			    </Scroll>
			  </div>  
			);
	    
    }	
}

export default App;