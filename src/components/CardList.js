import React from 'react';
import Card from './Card';

const CardList = ({robo}) =>{

	return(
	   <div>
	     {
			   robo.map((user, i) => {
			     
				return (
					<Card 
					key = {i}
					id={robo[i].id} 
					name={robo[i].name.slice(0,25) + (robo[i].name.length > 25 ? '...':"")} 
					email={robo[i].email}
					/>
				);	
			})

	      }
	   </div>

	);
}

export default CardList;



