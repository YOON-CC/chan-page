import React, { useState } from 'react';
// import "./body_2.css";

const Arduino = () => {

    const handleprojectClick = () => {
        window.open('https://github.com/YOON-CC/blocker_web', '_blank');
    };

    return (
        <div className="loadstar_container">
            <div className="loadstar_container_img">
                <img className="project_background_etc" src={require("../image/blocker_v2.png")}></img>
            </div>
            <div className="loadstar_container_stacks">
                <div>REACT</div>
                <div>TYPESCRIPT</div>
            </div>

            <div className="loadstar_container_discription1">
                Blocker_v2는 blocker_1의 웹 버전입니다. 현재 개발중입니다.
            </div>
            <div className="loadstar_container_search_container">
                <img src={require("../image/rocket.png")}></img>
                <div className="loadstar_container_search_container_text" onClick={handleprojectClick}>github</div>
            </div>

        </div>
    )

}
export default Arduino;