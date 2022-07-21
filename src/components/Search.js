import React from 'react';

const Search = ({searchfield,SearchChange}) => {
	return (
	  <div>	
		<input className='br2 pa2 ma3'
		type='search' 
		placeholder='Search me' 
		onChange={SearchChange}
		/>

	  </div>	
	);
}

export default Search;