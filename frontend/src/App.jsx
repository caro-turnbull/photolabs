import React, { useState } from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// import photos from 'mocks/photos';
import useApplicationData from 'hooks/useApllicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    modalHandler,
    favouriteClick,
    closeModal,
    filterByTopics,
    state
  } = useApplicationData()
  console.log("heres state in the app", state)
  
  return (
    <div className="App">
     <HomeRoute 
        photos={state.photos}
        state={state}
        modalHandler={modalHandler}
        favouriteClick={favouriteClick}
        filterByTopics={filterByTopics}
      />

      {(Object.keys(state.focusPhoto).length > 0) && 
      <PhotoDetailsModal 
        favouritesArr={state.favouritesArr}
        closeModal={closeModal}
        favouriteClick={favouriteClick}
        modalView ={state.modalView}
        indvPhotoData={state.focusPhoto}
        // photos={photos}
      />
      }
    </div>
  );
};

export default App;
