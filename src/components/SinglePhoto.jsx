import React from "react";
import imgArray from "./AllPhotos";

export default function SinglePhoto(props) {

  return (
  <div>  
    <img src={props.selectedPhoto} onClick={() => {props.switchToAllPhotoView()}} />
  </div>
  );
}
