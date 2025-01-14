import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';

import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { modalView, indvPhotoData, favouritesArr, closeModal, modalHandler, favouriteClick } = props;

  //turn similar_photos object into array, so we can map over it
  const similarPhotosArr = Object.values(indvPhotoData.similar_photos)
  // const selected = favouritesArr.includes(indvPhotoData)

  return modalView && (
    <div className="photo-details-modal">

      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      <div className="photo-details-modal__body"> 
        <PhotoFavButton 
          indvPhotoData={indvPhotoData}
          favouritesArr={favouritesArr}
          favouriteClick={favouriteClick}
          // selected={selected}
        />
        
        <img className="photo-details-modal__image" src= {indvPhotoData.urls.full} alt="broken img"></img>

        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={indvPhotoData.user.profile}></img>
          <div className="photo-list__user-info" > {indvPhotoData.user.name}
          <div className="photo-list__user-location" >
           {indvPhotoData.location.city}, {indvPhotoData.location.country}
          </div>
         </div>

      </div>

        <div className="photo-details-modal__header"> 
          <p>Similar Photos:</p>
        </div>

        <div className="photo-details-modal__images">
          <PhotoList 
            photos={similarPhotosArr}
            favouritesArr={favouritesArr}
            // selected={selected}
            modalHandler={modalHandler}
            favouriteClick={favouriteClick}
          />
         </div>

      </div>
    </div >
  );
};

export default PhotoDetailsModal;
