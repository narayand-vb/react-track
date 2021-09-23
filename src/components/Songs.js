import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { red } from "@material-ui/core/colors";

const Songs = (props) => {

    let likeStyle;
    
        // console.log(props.liked);
        if(props.liked)
        {
            likeStyle = {
                color : 'red'
            }
        }

    
  return (
    <>
      <div className="songs-container" key={props.id}>
        <button className="like" style={likeStyle} onClick={()=>{props.onSelect(props.id)}}>
          <span className="like-count">{props.like}</span>
          <ThumbUpIcon />
        </button>
        <div className="song-detail">
          <p className="song-title">{props.title}</p>
          <p className="song-subtitle">{props.subtitle}</p>
        </div>
        <div className="song-player">
          <audio controls src={props.media} className="audio"></audio>
        </div>
        <div className="options">
          <button className="dropdownBtn" onClick={()=>{props.onDrop(props.id)}}>
            <ArrowDropDownIcon />
          </button>
          <div className="delete-dropdown" id="delete-dropdown">
            <button className="delete">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Songs;