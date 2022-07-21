import React from 'react';

const Card = ({ email, name, id}) => {
	return (
         <div className='tc bg-light-green dib br2 pa2 ma3 grow bw2 shadow-3'>
          <img alt='robo' src={`https://robohash.org/${id}?size=230x230`} />
          <div>
           <h4 className='br4 bg-green'>{name}</h4>
           <p className='br4 bg-green'>{email}</p>
          </div>
         </div>
	);
}

export default Card; 