import React, { useState, useEffect } from 'react';

export default function useApplicationData () {
  const [modalView, setModalView] = useState(false)
  const [focusPhoto, setFocusPhoto] = useState({})
  const [favouritesArr, setFavouritesArr] = useState([])
  // const [selected, setSelected] = useState()  //should this go here?

  const state = {
    modalView, //whether modal is open or hidden
    focusPhoto, //which photo's info is shown in modal
    favouritesArr, //array of favourites
    // selected  //to show if each indv photo is fav or not
  }
console.log ("state from the custom hook", state)


  //this happens in PhotoListItem
  const modalHandler = (indvPhotoData) => {
    // console.log("are we rcving the right obj", indvPhotoData)
    // console.log(typeof indvPhotoData, "what type of data?")
    setModalView(true)
    setFocusPhoto(indvPhotoData)
    // setFocusPhoto((indvPhotoData.id)-1)
    // console.log("???ID or index?? from modal", indvPhotoData.id)
  }

  //this happen in the modal close button
  const closeModal =() =>{
    setModalView(false)
  }

  // //this happens in PhotoFavButton
  // const favouriteClick = (indvPhotoData) => {
  //   setFavouritesArr([...favouritesArr, indvPhotoData]) //need logic to check if item is already in array
  //   setSelected(selected === true ? false : true)
  //   console.log("ID of favourite", indvPhotoData.id)
  // }
///refactored to TOGGLE in FavArr  ///happens in photo fav button
const favouriteClick =(indvPhotoData) => {
  if (favouritesArr.includes(indvPhotoData)){
    setFavouritesArr(favouritesArr.filter(i => i !== indvPhotoData))  //what is i?
    console.log("if included", favouritesArr)
  } else {
    setFavouritesArr((prev) => [...prev, indvPhotoData]) //prev?
    console.log("if not included already", favouritesArr)
  }
}
  

  return{
    state,
    modalHandler,
    closeModal,
    favouriteClick
  }
}