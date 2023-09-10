import React, { useState } from 'react';

import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { indvPhotoData, favouritesArr, selected, modalHandler, favouriteClick } = props
  // console.log("PhotoListItem PROPS", props)
  // const [selected, setSelected] = useState() //would it be better here?

  return (
  <li className="photo-list__item" >
    <PhotoFavButton 
      indvPhotoData={indvPhotoData}
      favouritesArr={favouritesArr}
      favouriteClick={favouriteClick}
      selected= {selected}
      />
    <img className="photo-list__image" 
      src={indvPhotoData.urls.regular} 
      onClick={() => modalHandler(indvPhotoData)}>
    </img>

    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={indvPhotoData.user.profile}></img>
      <div className="photo-list__user-info" >
        {indvPhotoData.user.name}
        <div className="photo-list__user-location" >
          {indvPhotoData.location.city}, {indvPhotoData.location.country}
        </div>
      </div>
    </div>
  </li>
  )
};

export default PhotoListItem;
