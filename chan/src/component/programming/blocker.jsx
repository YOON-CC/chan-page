import React, { useState } from 'react';
// import "./body_2.css";

const Blocker = () => {

    const handleprojectClick = () => {
        window.open('https://github.com/YOON-CC/blocker_ver2', '_blank');
    };

    return (
        <div className="loadstar_container">
            <div className="loadstar_container_img">
                <img className="project_background" src={require("../image/blocker.png")}></img>
            </div>
            <div className="loadstar_container_stacks">
                <div>JAVASCRIPT</div>
                <div>REACT-NATIVE</div>
            </div>

            <div className="loadstar_container_discription1">
                Blocker는 블록체인기술을 적용한 비대면 계약서비스 앱입니다. 리펙토링을 계획중이며, 2번의 캡스톤 디자인 대회 우숭, 블록체인 공모전 대상을 수상한 작품입니다.
            </div>
            <div className="loadstar_container_search_container">
                <img src={require("../image/rocket.png")}></img>
                <div className="loadstar_container_search_container_text" onClick={handleprojectClick}>github</div>
            </div>

        </div>
    )

}
export default Blocker;