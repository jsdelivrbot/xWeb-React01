import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// YouTube API
const API_KEY = 'AIzaSyBC8UO09-ja-vhWp9Tk6QWIai5x-hwYhpg'; 

// Create a new component. This component should produce some HTML
const App = () => {
	return (
		<div>
		  <SearchBar />

		</div>
	);	
} 
 
ReactDOM.render(<App />, document.querySelector('.container'));