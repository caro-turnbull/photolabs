import React, { useState } from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import useApplicationData from 'hooks/useApllicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    modalHandler,
    favouriteClick,
    closeModal,
    state
  } = useApplicationData()
  console.log("heres state in the app", state)


  // const [modalView, setModalView] = useState(false)
  // const [indvPhotoID, setIndvPhotoID] = useState()
  // const [favouritesArr, setFavouritesArr] = useState([])

  
  return (
    <div className="App">
     <HomeRoute 
        photos={photos}
        state={state}
        modalHandler={modalHandler}
        favouriteClick={favouriteClick}
        // setModalView={setModalView}
        // setIndvPhotoID={setIndvPhotoID}
        // favouritesArr={favouritesArr}
        // setFavouritesArr={setFavouritesArr}
        />
      {(Object.keys(state.focusPhoto).length > 0) && 
      <PhotoDetailsModal 
        favouritesArr={state.favouritesArr}
        // selected={state.selected}
        closeModal={closeModal}
        favouriteClick={favouriteClick}
        modalView ={state.modalView}
        indvPhotoData={state.focusPhoto}
        // photos={photos}
        // setModalView={setModalView}
        // indvPhotoID={indvPhotoID}
        // indvPhotoData={photos[indvPhotoID]}
        // setFavouritesArr={setFavouritesArr}
      />
      }
    </div>
  );
};

export default App;
