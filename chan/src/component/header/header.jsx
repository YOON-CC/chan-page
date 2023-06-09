import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    
   
    return (
        
            <div className="header_container">
                <div className="header_container_1"><img className="logo" src={require("../image/logo.png")}></img></div>
                <div className="header_container_2">
                    <div>WHO AM I?</div>
                    <div>PROJECT</div>
                    <div>HOW TO STUDY</div>
                    <div>AWARDS & ETC</div>
                </div>
            </div>
        
    )

}
export default Header;