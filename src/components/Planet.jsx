import React from 'react';

const Planet = ({ planet }) => {
  return (
    <div className='parent-div'>
      <h5 className='pt-3'>{ planet.name }</h5>
      <p>Population - { planet.population }</p>
      <p>Terrain - { planet.terrain }</p>
    </div>
  );
}
 
export default Planet;