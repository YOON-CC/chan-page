import React, { useState } from 'react';
// import "./body_2.css";

const Amongus = () => {

    const handleprojectClick = () => {
        window.open('https://github.com/YOON-CC/amongUs_3D', '_blank');
    };

    return (
        <div className="loadstar_container">
            <div className="loadstar_container_img">
                <img className="project_background" src={require("../image/amongus.png")}></img>
            </div>
            <div className="loadstar_container_stacks">
                <div>C#</div>
                <div>UNITY-3D</div>
                <div>BLENDER</div>
            </div>

            <div className="loadstar_container_discription1">
                어몽어스3D는 컴퓨터 그래픽스 수업에서 만든 작품입니다. BLENDER로 직접 캐릭터모형을 만들고, 구현하여, 좋은 성적을 거둘 수 있었습니다.
            </div>
            <div className="loadstar_container_search_container">
                <img src={require("../image/rocket.png")}></img>
                <div className="loadstar_container_search_container_text" onClick={handleprojectClick}>search</div>
            </div>

        </div>
    )

}
export default Amongus;