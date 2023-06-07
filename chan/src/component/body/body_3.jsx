import React, { useState } from 'react';
import "./body_3.css";



const Body_3 = () => {
    const [csmarginTop, setcsMarginTop] = useState('220px');
    const [cscontainerMarginTop, setcsContainerMarginTop] = useState('220px');
    const [csbackgroundColor, setcsBackgroundColor] = useState('linear-gradient(111deg, #434343,#434343)');

    const [algomarginTop, setalgoMarginTop] = useState('220px');
    const [algocontainerMarginTop, setalgoContainerMarginTop] = useState('220px');
    const [algobackgroundColor, setalgoBackgroundColor] = useState('linear-gradient(111deg, #434343,#434343)');


    const handlecsCoverClick = () => {
        if (csmarginTop === '220px') {
            setcsMarginTop('48px');
            setcsContainerMarginTop('347px');
            setcsBackgroundColor('linear-gradient(111deg, #00ff66, #03f7ff,#08ff63, #3690ff,#3f09ff)');
        } else{
            setcsMarginTop('220px');
            setcsContainerMarginTop('220px');
            setcsBackgroundColor('linear-gradient(111deg, #434343, #434343)');
        }
    };

    const handlealgoCoverClick = () => {
        if (algomarginTop === '220px') {
            setalgoMarginTop('48px');
            setalgoContainerMarginTop('347px');
            setalgoBackgroundColor('linear-gradient(111deg, #00ff66, #03f7ff,#08ff63, #3690ff,#3f09ff)');
        } else{
            setalgoMarginTop('220px');
            setalgoContainerMarginTop('220px');
            setalgoBackgroundColor('linear-gradient(111deg, #434343, #434343)');
        }
    };



    return (
        <div className="body_3_container_1">
            <div className="body_3_computerscience">
                <div className="body_3_computerscience_cover" style={{ marginTop: csmarginTop, background: csbackgroundColor }} onMouseOver={handlecsCoverClick}>
                    <div><img className="project_background" src={require("../image/notion.png")}></img></div>
                </div>
                <div className="body_3_computerscience_container" style={{ marginTop: cscontainerMarginTop }} >
                    <div className="body_3_computerscience_container_text">
                        <div>두 명에서 CS스터디를 했습니다. 하나의 주제를 선정하고</div>
                        <div>확실하게 원리를 파악할 때까지 서로 공부를 합니다.</div>
                        <div>현재까지도 지속적으로 공부중이며 깊이있게 진행중입니다.</div>
                    </div>
                    <div className='body_3_computerscience_container_btn'>GO TO SEE</div>
                </div>
            </div>

            <div className="body_3_computerscience">
                <div className="body_3_computerscience_cover" style={{ marginTop: algomarginTop, background: algobackgroundColor }} onMouseOver={handlealgoCoverClick}>
                    <div><img className="project_background" src={require("../image/youtube_2.png")}></img></div>
                </div>
                <div className="body_3_computerscience_container" style={{ marginTop: algocontainerMarginTop }} >
                    <div className="body_3_computerscience_container_text">
                        <div>유튜브를 통해서 이전의 나의 공부 과정을 참고 하고, </div>
                        <div>개선하기 위해, 꾸준하게 영상을 촬영합니다.</div>
                        <div>나의 풀이를 복습하며 개선하는 방식으로 공부중입니다.</div>
                    </div>
                    <div className='body_3_computerscience_container_btn'>GO TO SEE</div>
                </div>
            </div>
            
        </div>
    )

}

export default Body_3;