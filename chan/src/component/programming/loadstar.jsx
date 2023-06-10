import React, { useState } from 'react';
// import "./body_2.css";

const Loadstar = () => {
    const handleprojectClick = () => {
        window.open('https://github.com/YOON-CC/loadstar', '_blank');
    };

    return (
        <div className="loadstar_container">
            <div className="loadstar_container_img">
                <img className="project_background" src={require("../image/loadstar.png")}></img>
            </div>
            <div className="loadstar_container_stacks">
                <div>JAVASCRIPT</div>
                <div>REACT</div>
                <div>REDUX</div>
            </div>

            <div className="loadstar_container_discription1">
                LoadStar는 현재 진행중인 프로젝트로 개발자가 꿈인 사용자들이 로드맵을 공유하고, 참고하며 진로방향을 설정하는 웹사이트입니다. 
            </div>
            <div className="loadstar_container_search_container">
                <img src={require("../image/rocket.png")}></img>
                <div className="loadstar_container_search_container_text" onClick={handleprojectClick}>github</div>
            </div>

        </div>
    )

}
export default Loadstar;