import React, { useState } from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modalView, setModalView] = useState(false)
  const [indvPhotoID, setIndvPhotoID] = useState()
  const [favouritesArr, setFavouritesArr] = useState([])

  
  return (
    <div className="App">
     <HomeRoute 
        setModalView={setModalView}
        setIndvPhotoID={setIndvPhotoID}
        photos={photos}
        favouritesArr={favouritesArr}
        setFavouritesArr={setFavouritesArr}
        />
      {modalView &&
        <PhotoDetailsModal 
        setModalView={setModalView}
        indvPhotoID={indvPhotoID}
        indvPhotoData={photos[indvPhotoID]}
        favouritesArr={favouritesArr}
        setFavouritesArr={setFavouritesArr}
        />
        }
    </div>
  );
};

export default App;
