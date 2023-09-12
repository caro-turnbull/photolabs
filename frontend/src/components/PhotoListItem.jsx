import React, { useState } from 'react';

import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { indvPhotoData, favouritesArr, modalHandler, favouriteClick, selectedClick } = props

  // const selected = favouritesArr.includes(indvPhotoData)

  return (
  <li className="photo-list__item" >
    <PhotoFavButton 
      indvPhotoData={indvPhotoData}
      favouritesArr={favouritesArr}
      favouriteClick={favouriteClick}
      selectedClick={selectedClick}
      // selected= {selected}
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
