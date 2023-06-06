import React, { useState } from 'react';
// import "./body_2.css";

const Arduino = () => {
   
    return (
        <div className="loadstar_container">
            <div className="loadstar_container_img"></div>
            <div className="loadstar_container_stacks">
                <div>C</div>
                <div>Arduino</div>
            </div>

            <div className="loadstar_container_discription1">
                임베드디 시스템 수업시간에 만든 작품입니다.
            </div>
            <div className="blocker_container_discription2">
                거리, 가스, 소리등 여러가지 센서를 활용하여 스마트 유모차를 구현하였습니다.
            </div>
            <div className="loadstar_container_search_container">
                <img src={require("../image/rocket.png")}></img>
                <div className="loadstar_container_search_container_text">search</div>
            </div>

        </div>
    )

}
export default Arduino;