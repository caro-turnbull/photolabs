import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton(props) {
  const { indvPhotoData,favouritesArr, setFavouritesArr } = props
  const [selected, setSelected] = useState()
  const displayFavourite = () => {setSelected(selected === true ? false : true)}
  
  const favouriteClick = () => {
    setFavouritesArr([...favouritesArr, indvPhotoData])
    //need to check if the item is already in teh array
    displayFavourite()
    console.log("item from favourite click", indvPhotoData)
    console.log("favourites array", favouritesArr)
  }

  
  return (
    <div className="photo-list__fav-icon" onClick={favouriteClick}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;