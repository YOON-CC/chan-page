import React, { useState } from 'react';
// import "./body_2.css";

const Arduino = () => {

    const handleprojectClick = () => {
        window.open('https://github.com/YOON-CC/smart_stroller', '_blank');
    };

    return (
        <div className="loadstar_container">
            <div className="loadstar_container_img">
                <img className="project_background" src={require("../image/arduino.jpg")}></img>
            </div>
            <div className="loadstar_container_stacks">
                <div>C</div>
                <div>Arduino</div>
            </div>

            <div className="loadstar_container_discription1">
                임베디드 시스템 수업시간에 만든 작품입니다. 거리, 가스, 소리등 여러가지 센서를 활용하여 스마트 유모차를 구현하였습니다.
            </div>
            <div className="loadstar_container_search_container">
                <img src={require("../image/rocket.png")}></img>
                <div className="loadstar_container_search_container_text" onClick={handleprojectClick}>github</div>
            </div>

        </div>
    )

}
export default Arduino;