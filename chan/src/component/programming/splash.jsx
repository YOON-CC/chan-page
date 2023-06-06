import React, { useState } from 'react';
// import "./body_2.css";

const Splash = () => {
   
    return (
        <div className="loadstar_container">
            <div className="loadstar_container_img"></div>
            <div className="loadstar_container_stacks">
                <div>JAVASCRIPT</div>
                <div>REACT</div>
            </div>

            <div className="loadstar_container_discription1">
                리엑트를 처음 접했을 때 usestate개념을 이해하기 위해 만든 작품입니다. 
            </div>
            <div className="blocker_container_discription2">
                미숙한 상태로 진행하여 부족한 부분이 많은 프로젝트 였지만, 이후의 프로젝트에 많은 도움이 되었습니다. 
            </div>
            <div className="loadstar_container_search_container">
                <img src={require("../image/rocket.png")}></img>
                <div className="loadstar_container_search_container_text">search</div>
            </div>

        </div>
    )

}
export default Splash;