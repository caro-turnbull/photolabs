import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const {favouritesArr} = props
  const isFavPhotoExist = favouritesArr.length //should this be state? why?
  // const [isFavPhotoExist, setFavPhotoExist] = useState(0)
  // setFavPhotoExist(favouritesArr.length)

  return (
    <div className='fav-badge'>
      <FavIcon 
        displayAlert={!!isFavPhotoExist}
        favouritesArr={favouritesArr}
        
      />
    </div>
  ) 
};

export default FavBadge;