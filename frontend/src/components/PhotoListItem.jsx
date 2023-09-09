import React from "react";

import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { setIndvPhotoID, setModalView, indvPhotoData, favouritesArr, setFavouritesArr } = props
  // console.log("PhotoListItem PROPS", props)

  const handleClick= () => {
    setModalView(true)
    setIndvPhotoID((indvPhotoData.id)-1)
  }

  return (
  <li className="photo-list__item" >
    <PhotoFavButton 
      indvPhotoData={indvPhotoData}
      favouritesArr={favouritesArr}
      setFavouritesArr={setFavouritesArr}
      />
    <img className="photo-list__image" src={indvPhotoData.urls.regular} onClick={handleClick}></img>

    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={indvPhotoData.user.profile}></img>
      <div className="photo-list__user-info" >
        {indvPhotoData.user.name}
        <div className="photo-list__user-location" >
          {indvPhotoData.location.city}, {indvPhotoData.location.country}
        </div>
      </div>
      
    </div>
  </li>
  )
};

export default PhotoListItem;
