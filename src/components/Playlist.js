import React,{useState} from "react";
import "./playlist.css";
import Data from "./Data";
import Songs from "./Songs";
import AddSong from "./AddSong";

import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";




const Playlist = () => {

  const [state, setstate] = useState(Data);

  const likeChange = (id)=>{
    let e = id -1;
    if(!state[e].liked){
      setstate(()=>{
        let newArr = [...state];
        let newLike = {id:state[e].id,like:state[e].like+1,liked:true,title:state[e].title,subtitle:state[e].subtitle,media:state[e].media}
        newArr[e] = newLike;
        return (newArr);
      })
    }else{
      setstate(()=>{
        let newArr = [...state];
        let newLike = {id:state[e].id,like:state[e].like-1,liked:false,title:state[e].title,subtitle:state[e].subtitle,media:state[e].media}
        newArr[e] = newLike;
        return (newArr);
    });
  };
  }

  const deleteDropdown = (i)=>{
    let id = i-1;
    const del_container = document.getElementsByClassName('delete-dropdown');
    
    if(del_container[id].style.display=='none')
    del_container[id].style.display='block';
    else
    del_container[id].style.display='none'
  }

  
  return (
    <>
      <div className="playlist-container">
        <div className="search-bar">
          <button className="cancel-search">
            <CloseIcon />
          </button>
          <input type="search" placeholder="Enter text to search" />
          <button className="search-button">
            <SearchIcon />
          </button>
        </div>
        <div className="song-main-container">
          {state.map((data) => {
            return (
                  <Songs 
                    key = {data.id}
                    id = {data.id}
                    title = {data.title}
                    subtitle = {data.subtitle}
                    like = {data.like}
                    liked = {data.liked}
                    media = {data.media}
                    onSelect={likeChange}
                    onDrop={deleteDropdown}
                    
                  />
            );
          })}
        </div>
        
                {/* <div className="addSong"> */}
                  <AddSong />
                {/* </div> */}
      </div>
    </>
  );
};

export default Playlist;
