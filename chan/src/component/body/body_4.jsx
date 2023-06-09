import React, { useState } from 'react';
import "./body_4.css";

const Body_4 = () => {

    const handlevelogClick1 = () => {
        window.open('https://velog.io/@happycyc/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C', '_blank');
    };
    const handlevelogClick2 = () => {
        window.open('https://velog.io/@happycyc/2022%EB%85%84-%ED%95%99%EA%B5%90%EB%A5%BC-%EB%B9%9B%EB%82%B8-%EC%96%BC%EA%B5%B4', '_blank');
    };
    const handlevelogClick3 = () => {
        window.open('https://velog.io/@happycyc/%EC%BB%B4%ED%93%A8%ED%84%B0%EA%B3%B5%ED%95%99%EB%B6%80-%EC%BA%A1%EC%8A%A4%ED%86%A4-%EB%94%94%EC%9E%90%EC%9D%B8-%EB%B0%9C%ED%91%9C%EB%8C%80%ED%9A%8C', '_blank');
    };
    const handlevelogClick4 = () => {
        window.open('https://velog.io/@happycyc/%EC%A0%95%EB%B3%B4%EC%9C%B5%ED%95%A9%EB%8C%80%ED%95%99-%EC%BA%A1%EC%8A%A4%ED%86%A4-%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C', '_blank');
    };
    const handlevelogClick5 = () => {
        window.open('https://velog.io/@happycyc/%EC%A0%95%EB%B3%B4%EC%9C%B5%ED%95%A9%EB%8C%80%ED%95%99-%EC%BA%A1%EC%8A%A4%ED%86%A4-%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C', '_blank');
    };
    const handlevelogClick6 = () => {
        window.open('https://velog.io/@happycyc/Running-Circle-%EC%84%B1%EA%B3%BC%EB%B3%B4%EA%B3%A0%EB%B0%9C%ED%91%9C%ED%9A%8C', '_blank');
    };
    const handlevelogClick7 = () => {
        window.open('https://velog.io/@happycyc/%EC%86%8C%EC%99%B8%EA%B3%84%EC%B8%B5%EC%9D%84-%EC%9C%84%ED%95%9C-AI%ED%99%9C%EC%9A%A9-%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-%EA%B3%B5%EB%AA%A8%EC%A0%84-2021', '_blank');
    };
    const handlevelogClick8 = () => {
        window.open('https://velog.io/@happycyc/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EB%AC%BC%EC%82%B0%EC%97%85-%ED%98%81%EC%8B%A0%EC%B0%BD%EC%97%85-%EB%8C%80%EC%A0%84-20211%EB%B6%80', '_blank');
    };



    return (
        <div className="body_4_container_1">
            <div className="body_4_board">
                <div className="body_4_board_c1">
                    <div className="body_4_board_list" onClick={handlevelogClick1}>
                        <div className="body_4_board_list_img"><img className="project_background" src={require("../image/awards.png")}></img></div>
                        <div className="body_4_board_list_text1">PKNU</div>
                        <div className="body_4_board_list_text2">프로그래밍 대회</div>
                        <div className="body_4_board_list_result">장려상</div>
                    </div>
                    <div className="body_4_board_list" onClick={handlevelogClick2}>
                        <div className="body_4_board_list_img"><img className="project_background" src={require("../image/awards.png")}></img></div>
                        <div className="body_4_board_list_text1">2022</div>
                        <div className="body_4_board_list_text2">학교를 빛낸 인물</div>
                        <div className="body_4_board_list_result">총장상</div>
                    </div>
                    <div className="body_4_board_list" onClick={handlevelogClick3}>
                        <div className="body_4_board_list_img"><img className="project_background" src={require("../image/awards.png")}></img></div>
                        <div className="body_4_board_list_text1">컴퓨터공학부</div>
                        <div className="body_4_board_list_text2">캡스톤 발표대회</div>
                        <div className="body_4_board_list_result">최우수상</div>
                    </div>
                    <div className="body_4_board_list" onClick={handlevelogClick4}>
                        <div className="body_4_board_list_img"><img className="project_background" src={require("../image/awards.png")}></img></div>
                        <div className="body_4_board_list_text1">정보융합대학</div>
                        <div className="body_4_board_list_text2">캡스톤 발표대회</div>
                        <div className="body_4_board_list_result">최우수상</div>
                    </div>
                    <div className="body_4_board_list" onClick={handlevelogClick5}>
                        <div className="body_4_board_list_img"><img className="project_background" src={require("../image/awards.png")}></img></div>
                        <div className="body_4_board_list_text1">AI 블록체인</div>
                        <div className="body_4_board_list_text2">아이디어 경진대회</div>
                        <div className="body_4_board_list_result">대상</div>
                    </div>
                    <div className="body_4_board_list" onClick={handlevelogClick6}>
                        <div className="body_4_board_list_img"><img className="project_background" src={require("../image/awards.png")}></img></div>
                        <div className="body_4_board_list_text1">Running Circle</div>
                        <div className="body_4_board_list_text2">성과 보고회</div>
                        <div className="body_4_board_list_result">장려상</div>
                    </div>
                    <div className="body_4_board_list" onClick={handlevelogClick7}>
                        <div className="body_4_board_list_img"><img className="project_background" src={require("../image/awards.png")}></img></div>
                        <div className="body_4_board_list_text1">소외계층을 위한 AI</div>
                        <div className="body_4_board_list_text2">활용 아이디어 공모전</div>
                        <div className="body_4_board_list_result">우수상</div>
                    </div>
                    <div className="body_4_board_list" onClick={handlevelogClick8}>
                        <div className="body_4_board_list_img"><img className="project_background" src={require("../image/awards.png")}></img></div>
                        <div className="body_4_board_list_text1">대한민국 물산업</div>
                        <div className="body_4_board_list_text2">혁신 창업 대전</div>
                        <div className="body_4_board_list_result">최종10팀</div>
                    </div>

                </div>
                <div className="body_4_board_c2">
                    <div className="body_4_board_etc">
                        <div className="body_4_board_etc_title">ETC</div>
                        <div className="body_4_board_etc_container">
                            <div>컴퓨터활용능력 1급</div>
                            <div>네트워크관리사 2급</div>
                            <div>경성태크놀러지 여름방학 학생인턴</div>
                            <div>2021년도 컴퓨터공학과 멘토링 멘토</div>
                            <div>GDSC 2022년도 일반멤버 수료</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Body_4;