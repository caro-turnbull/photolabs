import React, { useState } from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApllicationData';

const App = () => {
  const {
    modalHandler,
    favouriteClick,
    closeModal,
    filterByTopics,
    resetPhotoData,
    darkMode,
    showFavourites,
    state
  } = useApplicationData()
  
  return (
    <div className="App">
     <HomeRoute 
        photos={state.photos}
        state={state}
        modalHandler={modalHandler}
        favouriteClick={favouriteClick}
        filterByTopics={filterByTopics}
        resetPhotoData={resetPhotoData}
        darkMode={darkMode}
        showFavourites={showFavourites}
      />

      {(Object.keys(state.focusPhoto).length > 0) && 
      <PhotoDetailsModal 
        favouritesArr={state.favouritesArr}
        closeModal={closeModal}
        favouriteClick={favouriteClick}
        modalView ={state.modalView}
        indvPhotoData={state.focusPhoto}
      />
      }
      
    </div>
  );
};

export default App;
