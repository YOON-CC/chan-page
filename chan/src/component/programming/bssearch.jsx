import React, { useState } from 'react';
// import "./body_2.css";

const Bssearch = () => {
    const handleprojectClick = () => {
        window.open('https://github.com/YOON-CC/BSSEARCH', '_blank');
    };
    return (
        <div className="loadstar_container">
            <div className="loadstar_container_img">
                <img className="project_background" src={require("../image/bssearch.png")}></img>
            </div>
            <div className="loadstar_container_stacks">
                <div>JAVASCRIPT</div>
            </div>

            <div className="loadstar_container_discription1">
                Bssearch는 인터넷 프로그래밍 수업에서 만든 팀 프로젝트입니다. 지도api를 활용하여, 부산에서 붕어빵장사를 하기 좋은 장소를 탐색할 수 있는 웹서비스 입니다.
            </div>
            <div className="loadstar_container_search_container">
                <img src={require("../image/rocket.png")}></img>
                <div className="loadstar_container_search_container_text" onClick={handleprojectClick}>github</div>
            </div>

        </div>
    )

}
export default Bssearch;