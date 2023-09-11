import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const {numOfFavourites} = props
  // const areThereAnyFavs = favouritesArr.length 


  return (
    <div className='fav-badge'>
      <FavIcon 
        displayAlert={!!numOfFavourites}
        numOfFavourites={numOfFavourites}
        
      />
    </div>
  ) 
};

export default FavBadge;