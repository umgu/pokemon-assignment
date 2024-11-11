import React from 'react';
import "./index.scss";

const Navbar = () => {

    const avatar = JSON.parse(localStorage.getItem("user-details" || {})).avatar || "";

    return (
        <div id="navbar">
            <div>
                <img src="images/pokemon-app-logo.png" alt="Logo..." />
            </div>
            <div>
                <div>
                    <img className='user-logo' src={avatar} alt="user-logo..." />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
