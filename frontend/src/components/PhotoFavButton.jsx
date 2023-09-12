import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { indvPhotoData, favouritesArr, favouriteClick } = props
  // const [selected, setSelected] = useState(false);  //still using useState here

  // const  = function selectClick() {
  //   setSelected(!selected);
  
  const selected = favouritesArr.includes(indvPhotoData)
  // console.log("when will this log?", selected)

  return (
    <div className="photo-list__fav-icon" 
      onClick={()=> {favouriteClick(indvPhotoData)}} //something in the param of selectClick???
    >
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;