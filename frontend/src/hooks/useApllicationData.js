import React, { useState, useEffect, useReducer } from 'react';

const ACTIONS = {
  FAV_PHOTO_TOGGLE: 'FAV_PHOTO_TOGGLE',
  SET_FOCUS_PHOTO: 'SET_FOCUS_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
};

const initialState = {
  modalView: false, 
  focusPhoto: {}, 
  favouritesArr: [],
  photos: [],
  topics: []
}

function reducer(state, action) {
  console.log("state in the reducer funt", state)
  
  if (action.type === "FAV_PHOTO_TOGGLE") {
    return {...state, favouritesArr: action.value}
  }
  if (action.type === "SET_FOCUS_PHOTO") {
    return {...state, modalView: true, focusPhoto: action.value}
  }
  if (action.type === "CLOSE_MODAL") {
    return {...state, modalView: action.value}
  }
  if (action.type === "SET_PHOTO_DATA") {
    return {...state, photos: action.value}
  }
  if (action.type === "SET_TOPIC_DATA") {
    return {...state, topics: action.value}
  }
}

export default function useApplicationData () {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  //this calls the photos
    useEffect(() => {
        console.log("fetching photos");
        fetch('http://localhost:8001/api/photos')
        .then(res => res.json())
        .then (data => {
          console.log("data from fetch", data)
          dispatch({type: ACTIONS.SET_PHOTO_DATA, value: data})
        })
      }, []); //just once


    //this calls the topics
    useEffect(() => {
      console.log("fetching topics");
      fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then (data => {
        console.log("data from fetch", data)
        dispatch({type: ACTIONS.SET_TOPIC_DATA, value: data})
      })
    }, []); //just once


  //this happens in PhotoListItem
  const modalHandler = (indvPhotoData) => {
    console.log("are we rcving the right obj", indvPhotoData)
    dispatch({type: ACTIONS.SET_FOCUS_PHOTO, value: indvPhotoData})
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
      dispatch({type: ACTIONS.FAV_PHOTO_TOGGLE, value: removed})
    } else {
      const added = [...state.favouritesArr, indvPhotoData]
      dispatch({type: ACTIONS.FAV_PHOTO_TOGGLE, value: added})
    }
  }

  return {
    state,
    modalHandler,
    closeModal,
    favouriteClick
  }
}