import React from "react";
import FaceIcon from '@material-ui/icons/Face';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RadioIcon from '@material-ui/icons/Radio';

const Header = ()=>{


    return(
        <>
            <nav className="navbar">
                <div className="left">
                    <div className="radio-img">
                        <RadioIcon />
                    </div>
                    <div className="radio-track">
                        ReactTrack
                    </div>
                </div>
                <div className="middle">
                    <div className="dave-img">
                    <FaceIcon/>
                    </div>
                    <div className="dave">
                        Dave
                    </div>
                </div>
                <div className="right">
                    <a href="#" className="signout">signout</a>
                    <ExitToAppIcon />
                </div>
            </nav>
        </>
    )
};

export default Header;
