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
        // selected ={selected}
        modalHandler={modalHandler}
        favouriteClick={favouriteClick}
        // setFavouritesArr={setFavouritesArr}
        // setModalView={setModalView}
        // setIndvPhotoID={setIndvPhotoID}
        />
        )
      )}
    </ul>
  );
};

export default PhotoList;
