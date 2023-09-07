import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton() {
  const [selected, setSelected] = useState()
  
  const favouriteHandler = () => {setSelected(selected === true ? false : true)}
  
  return (
    <div className="photo-list__fav-icon" onClick={favouriteHandler}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;