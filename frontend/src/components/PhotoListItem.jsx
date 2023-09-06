import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const photoData = props.photoData
  return (
  <div>
    <img src={photoData.imageSource}></img>
    <img src={photoData.profile}></img>
    <p>{photoData.username}</p>
    <p>{photoData.location.city}, {photoData.location.country}</p>
  </div>
  )
};

export default PhotoListItem;
