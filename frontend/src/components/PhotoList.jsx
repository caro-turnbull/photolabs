import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

import "../styles/PhotoList.scss";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map(item => (
        <PhotoListItem key={item.id} photoData={item}/>
      ))}
    </ul>
  );
};

export default PhotoList;
