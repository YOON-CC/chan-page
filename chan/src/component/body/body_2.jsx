import React, { useState } from 'react';
import Loadstar from '../programming/loadstar';
import Blocker from '../programming/blocker';
import Amongus from '../programming/amongus';
import Arduino from '../programming/arduino';
import Spacewar from '../programming/spacewar';
import Bssearch from '../programming/bssearch';
import Splash from '../programming/splash';
import "./body_2.css";



const Body_2 = () => {
    const [page, setPage] = useState(0);

    return (
        <div className="body_2_container_1">
            <img className="body_2_background" src={require("../image/background.jpg")}></img>
            <div className="body_2_container_1_title">PROGRAMMING</div>
            <div className="body_2_container_1_c1">
                <div className = "body_2_container_1_c1_tag">
                    <div onClick={function(){
                        setPage(0);}}>loadstar
                    </div>
                    <div onClick={function(){
                        setPage(1);}}>blocker
                    </div>
                    <div onClick={function(){
                        setPage(2);}}>어몽어스3D
                    </div>
                    <div onClick={function(){
                        setPage(3);}}>아두이노
                    </div>
                    <div onClick={function(){
                        setPage(4);}}>space-war
                    </div>
                    <div onClick={function(){
                        setPage(5);}}>BSsearch
                    </div>
                    <div onClick={function(){
                        setPage(6);}}>SPLASH
                    </div>
                </div>

                {page === 0 &&  <Loadstar></Loadstar>} 
                {page === 1 &&  <Blocker></Blocker>} 
                {page === 2 &&  <Amongus></Amongus>} 
                {page === 3 &&  <Arduino></Arduino>} 
                {page === 4 &&  <Spacewar></Spacewar>} 
                {page === 5 &&  <Bssearch></Bssearch>} 
                {page === 6 &&  <Splash></Splash>} 
            </div>
        </div>
    )

}
export default Body_2;