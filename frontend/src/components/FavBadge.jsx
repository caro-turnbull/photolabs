import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const {favouritesArr} = props
  const areThereAnyFavs = favouritesArr.length 


  return (
    <div className='fav-badge'>
      <FavIcon 
        displayAlert={!!areThereAnyFavs}
        favouritesArr={favouritesArr}
        
      />
    </div>
  ) 
};

export default FavBadge;