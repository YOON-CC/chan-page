import React, { useState } from 'react';
import "./body_1.css";

const Body = () => {

    const handlegithubClick = () => {
        window.open('https://github.com/YOON-CC', '_blank');
    };
    const handleyoutubeClick = () => {
        window.open('https://www.youtube.com/channel/UCBHBPWENh2qA1-00eiqs9XA', '_blank');
    };
    const handleblogClick = () => {
        window.open('https://velog.io/@happycyc', '_blank');
    };

    return (
        <div className="body_container_1">
            <div className="body_container_1_frame">
                <div className="body_container_1_c1">
                    <div className="body_container_1_c1_img_container">
                        <img className="body_container_1_c1_img_container_img" src={require("../image/profile.jpg")}></img>
                        <div className="profile_text">
                            <div className="body_container_1_c2_title_1"><span className="title_point_1">성장</span>을 거부하지 않는</div>
                            <div className="body_container_1_c2_title_2"><span className="title_point_2">FRONT-END</span> 개발자 조윤찬입니다.</div>
                        </div>    
                    </div>
                </div>
                <div className="body_container_1_c2">
                    <div className="body_container_1_c2_contents">
                        <div className="body_container_1_c2_contents_1">
                            <div className="body_container_1_c2_contents_1_tag_content">
                                <div className="body_container_1_c2_contents_1_tag_title">SKILLS</div>
                                <img src={require("../image/js.png")}></img>
                                <img src={require("../image/react.png")}></img>
                                <img src={require("../image/redux.png")}></img>
                                <img src={require("../image/py.png")}></img>
                            </div>
                        </div>

                        <div className="body_container_1_c2_contents_2">
                            <div className="body_container_1_c2_contents_2_tag_content">
                                <div className="body_container_1_c2_contents_2_tag_title">CHANNEL</div>
                                <div className="body_container_1_c2_contents_2_tag_img_controller">
                                    <img src={require("../image/git.png")} onClick={handlegithubClick}></img>
                                    <img src={require("../image/youtube.png")} onClick={handleyoutubeClick}></img>
                                    <img src={require("../image/blog.png")} onClick={handleblogClick}></img>
                                </div>
                            </div>
                        </div>
                        
                        <div className="body_container_1_c2_contents_3">
                            <div className="body_container_1_c2_contents_3_tag_content">
                                <div>1999.01.17</div>
                                <div>happychan7@naver.com</div>
                                
                            </div>
                        </div>        

                        <div className="body_container_1_c2_contents_4">
                            <div className="body_container_1_c2_contents_4_tag_content">
                                <div>부경대학교 컴퓨터공학과 18.03 ~ 24.02(예정)</div>
                            </div>
                        </div>                 
                        

                    </div>
                </div>
            </div>
        </div>
    )

}
export default Body;