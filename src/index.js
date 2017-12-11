import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

// YouTube API
const API_KEY = 'AIzaSyDxjgry2HZl0vtlCFTkz_RDDFwwIFIlFdE'; 

// Test Search
YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});

// Create a new component. This component should produce some HTML
const App = () => {
	return (
		<div>
		  <SearchBar />

		</div>
	);	
} 
 
ReactDOM.render(<App />, document.querySelector('.container'));