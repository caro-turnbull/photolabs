import React, { useState, useEffect, useReducer } from 'react';

const ACTIONS = {
  FAV_PHOTO_TOGGLE: 'FAV_PHOTO_TOGGLE',
  SET_FOCUS_PHOTO: 'SET_FOCUS_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

const initialState = {
  modalView: false, //whether modal is open or hidden
  focusPhoto: {}, //which photo's info is shown in modal
  favouritesArr: [] //array of favourites
}

function reducer(state, action) {
  
  if (action.type === "FAV_PHOTO_TOGGLE") {
    return {...state, favouritesArr:action.value}
  }
  if (action.type === "SET_FOCUS_PHOTO") {
    return {...state, modalView:true, focusPhoto:action.value}
  }
  if (action.type === "CLOSE_MODAL") {
    return {...state, modalView:action.value}
  }
}

export default function useApplicationData () {
  
  const [state, dispatch] = useReducer(reducer, initialState)


  //this happens in PhotoListItem
  const modalHandler = (indvPhotoData) => {
    console.log("are we rcving the right obj", indvPhotoData)
    dispatch({type: ACTIONS.SET_FOCUS_PHOTO, value: indvPhotoData})
    // setModalView(true)
    // setFocusPhoto(indvPhotoData)
    // setFocusPhoto((indvPhotoData.id)-1)
    // console.log("???ID or index?? from modal", indvPhotoData.id)
  }

  //this happen in the modal close button
  const closeModal =() =>{ 
    dispatch({type: ACTIONS.CLOSE_MODAL, value:false})
  }

  ///refactored to TOGGLE in FavArr  ///happens in photo fav button
  const favouriteClick =(indvPhotoData) => {
    if (state.favouritesArr.includes(indvPhotoData)){
      const copyOfFavs = [...state.favouritesArr]
      const removed = copyOfFavs.filter(i => i !== indvPhotoData)
      // setFavouritesArr(favouritesArr.filter(i => i !== indvPhotoData))
      dispatch({type: ACTIONS.FAV_PHOTO_TOGGLE, value: removed})
      console.log("if included", copyOfFavs)
    } else {
      const added = [...state.favouritesArr, indvPhotoData]
      dispatch({type: ACTIONS.FAV_PHOTO_TOGGLE, value: added})
      // setFavouritesArr((prev) => [...prev, indvPhotoData]) //prev?
      console.log("if not included already", state.favouritesArr)
    }
  }

  return {
    state,
    modalHandler,
    closeModal,
    favouriteClick
  }
}