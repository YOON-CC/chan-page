import React, { useRef } from 'react';

import Body_1 from './component/body/body_1';
import Body_2 from './component/body/body_2';
import Body_3 from './component/body/body_3';
import Body_4 from './component/body/body_4';
import Footer from './component/footer/footer';


import './App.css';

function App() {

  const inputForm1 = useRef();  //특정 DOM을 가리킬 때 사용하는 Hook함수, SecondDiv에 적용
  const inputForm2 = useRef()
  const inputForm3 = useRef()
  const inputForm4 = useRef()

  const onMoveToForm1 = () => {
    inputForm1.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const onMoveToForm2 = () => {
    inputForm2.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const onMoveToForm3 = () => {
    inputForm3.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const onMoveToForm4 = () => {
    inputForm4.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  return (
    <div className="App">
      <div className="App_container">
        <div className="header_container">
            <div className="header_container_1"><img className="logo" src={require("./component/image/logo.png")}></img></div>
            <div className="header_container_2">
                <div onClick={onMoveToForm1}>WHO AM I?</div>
                <div onClick={onMoveToForm2}>PROJECT</div>
                <div onClick={onMoveToForm3}>HOW TO STUDY</div>
                <div onClick={onMoveToForm4}>AWARDS & ETC</div>
            </div>
        </div>
        <div ref={inputForm1}></div>
        <Body_1></Body_1>
        <div ref={inputForm2}></div>
        <Body_2></Body_2>
        <div ref={inputForm3}></div>
        <Body_3></Body_3>
        <div ref={inputForm4}></div>
        <Body_4></Body_4>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

 