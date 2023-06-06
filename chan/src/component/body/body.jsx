import React, { useState } from 'react';
import "./body.css";

const Body = () => {
   
    return (
        <div className="body_container_1">
            <div className="body_container_1_c1">
                <div className="body_container_1_c1_img_container">
                            
                    <div className="body_container_1_c1_img_container_hat1"></div>
                    <div className="body_container_1_c1_img_container_hat2"></div>
                    <div className="body_container_1_c1_img_container_hat3"></div>
                    <div className="body_container_1_c1_img_container_hat4"></div>
                    <div className="body_container_1_c1_img_container_hole">
                        <img className="body_container_1_c1_img_container_img" src={require("../image/profile.jpg")}></img>
                    </div>
                    
                </div>
            </div>
            <div className="body_container_1_c2">
                <div className="body_container_1_c2_title">
                    <div className="body_container_1_c2_title_1"><span className="title_point_1">성장</span>을 거부하지 않는</div>
                    <div className="body_container_1_c2_title_2"><span className="title_point_2">프론트엔드</span> 개발자 조윤찬입니다.</div>
                </div>
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
                            <img src={require("../image/git.png")}></img>
                            <img src={require("../image/youtube.png")}></img>
                            <img src={require("../image/blog.png")}></img>
                        </div>
                    </div>
                    
                    <div className="body_container_1_c2_contents_3">
                        <div className="body_container_1_c2_contents_3_tag_content">
                            <div>1999.01.17</div>
                            <div>happychan7@naver.com</div>
                            <div>부경대학교 컴퓨터공학과 18.03 ~ 24.02(예정)</div>
                        </div>
                    </div>               
                    

                </div>
            </div>
        </div>
    )

}
export default Body;