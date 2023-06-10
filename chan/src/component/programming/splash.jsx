import React, { useState } from 'react';
// import "./body_2.css";

const Splash = () => {

    const handleprojectClick = () => {
        window.open('https://github.com/YOON-CC/SPLASH_VIEW', '_blank');
    };

    return (
        <div className="loadstar_container">
            <div className="loadstar_container_img">
                <img className="project_background" src={require("../image/splash.png")}></img>
            </div>
            <div className="loadstar_container_stacks">
                <div>JAVASCRIPT</div>
                <div>REACT</div>
            </div>

            <div className="loadstar_container_discription1">
                리엑트를 처음 접했을 때 usestate개념을 이해하기 위해 만든 작품입니다. 미숙한 상태로 진행하여 부족한 부분이 많은 프로젝트 였지만, 이후의 프로젝트에 많은 도움이 되었습니다. 
            </div>
            <div className="loadstar_container_search_container">
                <img src={require("../image/rocket.png")}></img>
                <div className="loadstar_container_search_container_text" onClick={handleprojectClick}>github</div>
            </div>

        </div>
    )

}
export default Splash;