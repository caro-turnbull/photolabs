import React from "react";

import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const photoData = props.photoData
  console.log("PROPS", props)
  return (
  <li className="photo-list__item">
    <PhotoFavButton />
    <img className="photo-list__image" src={photoData.urls.regular}></img>

    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={photoData.user.profile}></img>
      <div className="photo-list__user-info" >
        {photoData.user.name}
        <div className="photo-list__user-location" >
          {photoData.location.city}, {photoData.location.country}
        </div>
      </div>
      
    </div>
  </li>
  )
};

export default PhotoListItem;
