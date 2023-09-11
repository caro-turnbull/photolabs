import React from "react";
import PhotoListItem from "./PhotoListItem";


import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos, favouritesArr, modalHandler, favouriteClick} = props

  return (
    <ul className="photo-list">
      {photos.map(item => (
        <PhotoListItem 
        key={item.id} 
        indvPhotoData={item}
        favouritesArr={favouritesArr}
        modalHandler={modalHandler}
        favouriteClick={favouriteClick}
        />
        )
      )}
    </ul>
  );
};

export default PhotoList;
