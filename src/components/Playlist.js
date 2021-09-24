import React, { useState } from "react";
import "./playlist.css";
import Data from "./Data";
import Songs from "./Songs";
import AddSong from "./AddSong";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";

const Playlist = () => {
  const [state, setstate] = useState(Data);
  const [oldData, newData] = useState("");
  const [oldRecord, setRecord] = useState({
    title: "",
    subtitle: "",
    media: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRecord({ ...oldRecord, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      id: state.length + 1,
      like: 0,
      liked: false,
      ...oldRecord,
    };
    setstate([...state, newRecord]);
    const addSong = document.getElementById("addSong-form");
    addSong.style.display = "none";
    setRecord({ title: "", subtitle: "", media: "" });
  };
  const searchHandler = (event) => {
    newData(event.target.value);
  };

  const clearSearch = ()=>{
    newData("");
  }

  //    LIKES Increment / Decreament    //
  const likeChange = (e) => {
    let likeCount, liked;
    if (!state[e].liked) {
      likeCount = state[e].like + 1;
      liked = true;
    } else {
      likeCount = state[e].like - 1;
      liked = false;
    }
    setstate(() => {
      let newArr = [...state];
      let newLike = {
        id: state[e].id,
        like: likeCount,
        liked: liked,
        title: state[e].title,
        subtitle: state[e].subtitle,
        media: state[e].media,
      };
      newArr[e] = newLike;
      return newArr;
    });
  };

  //    DROPDOWN of delete song      //
  const deleteDropdown = (id) => {
    const del_container = document.getElementsByClassName("delete-dropdown");
    if (del_container[id].style.display === "none") {
      del_container[id].style.display = "block";
    } else {
      console.log("clicked");
      del_container[id].style.display = "none";
    }
  };

  //    DELETE SONG      //
  const deleteItem = (i) => {
    setstate((oldData) => {
      return oldData.filter((arrElem, index) => {
        return index !== i;
      });
    });
  };

  return (
    <>
      <div className="playlist-container">
        <div className="search-bar">
          <button className="cancel-search" onClick={clearSearch}>
            <CloseIcon className="cancel-search" />
          </button>
          <input
            type="search"
            placeholder="Enter text to search"
            value={oldData}
            onChange={searchHandler}
          />
          <button className="search-button">
            <SearchIcon />
          </button>
        </div>
        <div className="song-main-container">
          {state
            .filter((val) => {
              if (oldData === "") return val;
              else if (
                val.title.toLowerCase().includes(oldData.toLowerCase())
              ) {
                return val;
              }
            })
            .map((data, index) => {
              return (
                <Songs
                  key={index}
                  index={index}
                  id={data.id}
                  title={data.title}
                  subtitle={data.subtitle}
                  like={data.like}
                  liked={data.liked}
                  media={data.media}
                  onSelect={likeChange}
                  onDrop={deleteDropdown}
                  onDelete={deleteItem}
                />
              );
            })}
        </div>

        <div
          className="blur-backgroup"
          id="addSong-form"
          style={{ display: "none" }}
        >
          <form action="" className="addSong-form">
            <h1>Add Song</h1>
            <input
              type="text"
              placeholder="Enter Title"
              name="title"
              value={oldRecord.title}
              autoComplete="off"
              onChange={handleInput}
            />
            <input
              type="text"
              placeholder="Enter Subtitle"
              name="subtitle"
              value={oldRecord.subtitle}
              autoComplete="off"
              onChange={handleInput}
            />
            <input
              type="text"
              placeholder="Media"
              name="media"
              value={oldRecord.media}
              autoComplete="off"
              onChange={handleInput}
            />
            <input type="submit" value="Add" onClick={handleSubmit} />
          </form>
        </div>
        <AddSong />
      </div>
    </>
  );
};

export default Playlist;
