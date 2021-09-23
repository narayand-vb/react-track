import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DeleteIcon from "@material-ui/icons/Delete";

const Songs = (props) => {
  let likeStyle;
  if (props.liked) {
    likeStyle = {
      color: "red",
    };
  }
  return (
    <>
      <div className="songs-container" key={props.id}>
        <button
          className="like"
          style={likeStyle}
          onClick={() => {
            props.onSelect(props.index);
          }}
        >
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
          <button
            className="dropdownBtn"
            onClick={() => {
              props.onDrop(props.index);
            }}
          >
            <ArrowDropDownIcon />
          </button>
          <div
            className="delete-dropdown"
            id="delete-dropdown"
            style={{ display: "none" }}
          >
            <button
              className="delete"
              onClick={() => {
                props.onDelete(props.index);
              }}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Songs;
