import React from "react";
import PhotoListItem from "./PhotoListItem";


import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos, setModalView, setIndvPhotoID, favouritesArr, setFavouritesArr} = props

  return (
    <ul className="photo-list">
      {photos.map(item => (
        <PhotoListItem 
        key={item.id} 
        indvPhotoData={item}
        favouritesArr={favouritesArr}
        setFavouritesArr={setFavouritesArr}
        setModalView={setModalView}
        setIndvPhotoID={setIndvPhotoID}
        />
        )
      )}
    </ul>
  );
};

export default PhotoList;
