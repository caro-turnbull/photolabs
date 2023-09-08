import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {photos, setModalView, setIndvPhotoID, favouritesArr, setFavouritesArr} = props
  

  return (
    <div className="home-route">
      <TopNavigation 
        favouritesArr={favouritesArr}
      />
      <PhotoList 
        favouritesArr={favouritesArr}
        setFavouritesArr={setFavouritesArr}
        setModalView={setModalView}
        setIndvPhotoID={setIndvPhotoID}
        photos ={photos}
      />
    </div>
  );
};

export default HomeRoute;
