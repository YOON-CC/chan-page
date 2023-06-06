import React, { useState } from 'react';
// import "./body_2.css";

const Spacewar = () => {
   
    return (
        <div className="loadstar_container">
            <div className="loadstar_container_img">
                <img className="project_background" src={require("../image/spacewar.png")}></img>
            </div>
            <div className="loadstar_container_stacks">
                <div>JAVASCRIPT</div>

            </div>

            <div className="loadstar_container_discription1">
                Spacewar는 인터넷 프로그래밍 수업에서 만든 프로젝트입니다.
            </div>
            <div className="blocker_container_discription2">
                javascrpit로 구현한 벽돌깨기와 갤러그 게임을 합한 작품입니다.

            </div>

            <div className="loadstar_container_search_container">
                <img src={require("../image/rocket.png")}></img>
                <div className="loadstar_container_search_container_text">search</div>
            </div>

        </div>
    )

}
export default Spacewar;