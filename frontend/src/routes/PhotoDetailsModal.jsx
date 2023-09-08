import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { indvPhotoData, setModalView, setIndvPhotoID, favouritesArr, setFavouritesArr } = props;
  console.log("indvDATA from module", indvPhotoData);

  return indvPhotoData && (
    <div className="photo-details-modal">

      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={() => setModalView(false)}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      <div> 
        <img className="photo-details-modal--image" src= {indvPhotoData.urls.full} alt="broken img"></img>

        <p className="photo-details-modal__photographer-details">
          By: {indvPhotoData.user.name} <br></br>
          {indvPhotoData.location.city}, {indvPhotoData.location.country}
        </p>

        <p className="photo-details-modal--header"> 
          Similar Photos:
        </p>

        <div className="photo-details-modal--images">
          <PhotoList 
            photos={indvPhotoData.similar_photos}
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
