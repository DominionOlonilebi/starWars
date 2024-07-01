import React from 'react';

const People = ({ people }) => {
  return (
    <div className='parent-div'>
      <h5 className='pt-3'>{ people.name }</h5>
      <p>Height - { people.height }</p>
      <p>Hair color - { people.hair_color
 }</p>
 <p>Skin color - { people.skin_color
 }</p>
 <p>Eye color - { people.eye_color
 }</p>
    </div>
    
  );
}
 
export default People;