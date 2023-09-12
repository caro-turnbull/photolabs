import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const {numOfFavourites, favouritesArr, showFavourites} = props

  return (
    <div className='fav-badge' onClick={()=>showFavourites(favouritesArr)}>
      {numOfFavourites > 0  && <span style={{color: "red"}} >{numOfFavourites}</span>}
      <FavIcon 
        displayAlert={!!numOfFavourites}
        numOfFavourites={numOfFavourites}
        
      />
    </div>
  ) 
};

export default FavBadge;