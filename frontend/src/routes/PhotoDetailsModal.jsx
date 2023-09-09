import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { indvPhotoData, setModalView, setIndvPhotoID, favouritesArr, setFavouritesArr } = props;
  console.log("indvDATA from module", indvPhotoData);
  const simialPhotosArr = Object.values(indvPhotoData.similar_photos)
  // console.log("is this an array", simialPhotosArr)

  return indvPhotoData && (
    <div className="photo-details-modal">

      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={() => setModalView(false)}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      <div > 
        <img className="photo-details-modal__image" src= {indvPhotoData.urls.full} alt="broken img"></img>

        <p className="photo-details-modal__photographer-details">
          By: {indvPhotoData.user.name} <br></br>
          {indvPhotoData.location.city}, {indvPhotoData.location.country}
        </p>

        <p className="photo-details-modal__header"> 
          Similar Photos:
        </p>

        <div className="photo-details-modal__images">
          <PhotoList 
            photos={simialPhotosArr}
            setModalView={setModalView}
            setIndvPhotoID={setIndvPhotoID}
            favouritesArr={favouritesArr}
            setFavouritesArr={setFavouritesArr}
          />
         </div>

      </div>
    </div >
  );
};

export default PhotoDetailsModal;
