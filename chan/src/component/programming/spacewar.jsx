import React, { useState } from 'react';
// import "./body_2.css";

const Spacewar = () => {
   
    return (
        <div className="loadstar_container">
            <div className="loadstar_container_img"></div>
            <div className="loadstar_container_stacks">
                <div>JAVASCRIPT</div>

            </div>

            <div className="loadstar_container_discription1">
                Spacewar는 js로 구현한 벽돌깨기와 갤러그 게임을 합한 작품입니다.
            </div>

            <div className="loadstar_container_search_container">
                <img src={require("../image/rocket.png")}></img>
                <div className="loadstar_container_search_container_text">search</div>
            </div>

        </div>
    )

}
export default Spacewar;