import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {photos, state, modalHandler, favouriteClick} = props
  

  return (
    <div className="home-route">
      <TopNavigation 
        favouritesArr={state.favouritesArr}
      />
      <PhotoList 
        photos ={photos}
        favouritesArr={state.favouritesArr}
        selected={state.selected}
        modalHandler={modalHandler}
        favouriteClick={favouriteClick}
        // setFavouritesArr={setFavouritesArr}
        // setModalView={setModalView}
        // setIndvPhotoID={setIndvPhotoID}
      />
    </div>
  );
};

export default HomeRoute;
