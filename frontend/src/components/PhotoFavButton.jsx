import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { indvPhotoData, favouritesArr, favouriteClick } = props

  const selected = favouritesArr.includes(indvPhotoData.id)

  return (
    <div className="photo-list__fav-icon" 
      onClick={()=> {favouriteClick(indvPhotoData)}} 
    >
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;