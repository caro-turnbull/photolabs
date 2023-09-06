import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const photoData = props.photoData
  return (
  <div className="photo-list__item">
    <img className="photo-list__image" src={photoData.imageSource}></img>

    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={photoData.profile}></img>
      <div className="photo-list__user-info" >
        {photoData.username}
        <div className="photo-list__user-location" >
          {photoData.location.city}, {photoData.location.country}
        </div>
      </div>
      
    </div>
  </div>
  )
};

export default PhotoListItem;
