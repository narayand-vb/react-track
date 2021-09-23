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
  // const [searchTerms, setSearchTerms] = useState("");
  // const [searchResults, setsearchResults] = useState([]);

  const changeInput = (event) => {
    newData(event.target.value);
    // console.log(oldData);
  };

  

  const searchHandler = (event) => {
    newData(event.target.value);
    console.log(oldData);
    if (oldData !== "") {
       const searchedData = state.filter((Obj) => {
        return Object.values(Obj)[2]
          .toLowerCase()
          .includes(oldData.toLowerCase());
      });
      setstate(searchedData);
    } else {
      setstate(Data);
    }
  };

  //LIKES Increment / Decreament
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

  // DROPDOWN of delete song
  const deleteDropdown = (id) => {
    const del_container = document.getElementsByClassName("delete-dropdown");
    if (del_container[id].style.display === "none") {
      del_container[id].style.display = "block";
    } else {
      console.log("clicked");
      del_container[id].style.display = "none";
    }
  };

  // DELETE SONG
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
          <button className="cancel-search">
            <CloseIcon />
          </button>
          <input
            type="search"
            placeholder="Enter text to search"
            onChange={searchHandler}
          />
          <button className="search-button">
            <SearchIcon />
          </button>
        </div>
        <div className="song-main-container">
          {
            state.map((data, index) => {
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
            })
          }
        </div>

        {/* <div className="addSong"> */}
        <AddSong />
        {/* </div> */}
      </div>
    </>
  );
};

export default Playlist;
