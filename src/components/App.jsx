import React, { useState, useRef,  } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";

export default function App() {
  const [view, setView] = useState('AllPhotos')
  const [selectedPhoto, setSelectedPhoto] = useState()

  function switchToSinglePhotoView(){
    console.log("Cambia a single photo")
    setView('SinglePhoto');
  }

  function switchToAllPhotoView(){
    console.log("Cambia a allPhotos")
    setView('AllPhotos');
  }

  if (view === 'SinglePhoto') {
    return (
      <div className="app">
        <Navbar />
        <SinglePhoto 
          selectedPhoto = {selectedPhoto}
          switchToAllPhotoView = {switchToAllPhotoView}
        />
      </div>
      )
  } 
  
  else if (view === 'AllPhotos')
  
  {
    return (
      <div className="app">
        <Navbar />
        <AllPhotos 
          switchToSinglePhotoView={switchToSinglePhotoView}
          setSelectedPhoto = {setSelectedPhoto}
        />
        {/* <h1>Hello World!</h1> */}
      </div>
    )
  }
}
