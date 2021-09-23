import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./AddSong.css";


const AddSong = ()=>{

    const showAddsongForm = ()=>{
        const addbtn = document.querySelector(".add-button")
        const addSong = document.getElementById("addSong-form");
        if(addSong.style.display === "none")
        {
            addSong.style.display = "block";   
        }
        else
        addSong.style.display = "none";
    }    
    return(
        <>
            <div className="blur-backgroup" id="addSong-form" style={{display:'none'}}>
            <form action="" className="addSong-form" >
                <h1>Add Song</h1>
                <input type="text" placeholder="Enter Title"/>
                <input type="text" placeholder="Enter Subtitle"/>
                <input type="text" placeholder="Media"/>
                <input type="submit" value="Add" onClick={()=>{               
                }}/>
            </form>
            </div>

            <div className="add-button">
          <button onClick={showAddsongForm} >
            <AddIcon className="buttonAdd"/>
          </button>
        </div>
        </>
    )
}
export default AddSong;