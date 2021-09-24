import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./AddSong.css";


const AddSong = (props)=>{
    //  function to show and hide the add song box
    const showAddsongForm = ()=>{
        const addbtn = document.querySelector(".addBtn")
        const addSong = document.getElementById("addSong-form");
        if(addSong.style.display === "none")
        {
            addSong.style.display = "block";   
            addbtn.style.transform = 'rotate(45deg)'
        }
        else{
        addSong.style.display = "none";
        addbtn.style.transform = 'rotate(0deg)'
        }
    }    
    return(
        <>

            {/* Fixed button to show and hide the add song box */}
            <div className="add-button">
          <button className="addBtn" onClick={showAddsongForm} >
            <AddIcon className="buttonAdd"/>
            </button>
        </div>
        </>
    )
}
export default AddSong;