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
            // addbtn.style.transform = "scale(0.5)";
        }
        else
        addSong.style.display = "none";
        // addbtn.style.transform = "scale(2)";
    }    

    return(
        <>
        
            <form action="" id="addSong-form" >
                <input type="text" placeholder="Enter Title"/>
                <input type="text" placeholder="Enter Subtitle"/>
                <input type="text" placeholder="Media"/>
                <input type="submit" value="Add"/>
            </form>

            <div className="add-button">
          <button onClick={showAddsongForm} >
            <AddIcon className="buttonAdd"/>
          </button>
        </div>
        </>
    )
}
export default AddSong;