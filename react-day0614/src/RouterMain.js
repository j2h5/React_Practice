import React from "react";
import {Route,Routes} from 'react-router-dom';
import {Home, About,Food1,Food2,Food} from './pages'; //자동으로 pages의 index.js가 import됨
import Menu from "./components/Menu";

import './App.css';

const RouterMain=()=>{

    return(
        <div>
            {/* 모든페이지에서 공통으로 포함되는 컴포넌트나 이미지*/}
            <h1 className="title"> React Router Study </h1>
            <Menu/>
            <img src="./image/s1.JPG" alt="" className="name_photo"/>
            <hr className="line" align="left"/>
            <div className="main_comp">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/About/:name" element={<About/>}/> 

                <Route path="/Food1" element={<Food1/>}/> 
                <Route path="/Food2" element={<Food2/>}/> 
                <Route path="/Food/:food1/:food2" element={<Food/>}/> 

                {/* 그 이외의 매핑주소일 경우 */}   
                <Route path="login/*" element={
                    <div>
                    <h1>로그인 기능은 아직 구현 중입니다.</h1>
                    <img src="../image/s7.JPG" alt=""/>
                    </div>
                }/>
                <Route  path="*" element={
                    <h1>잘못된 주소입니다.</h1>
                }/>
            </Routes>
            </div>
        </div>
    )
}

export default RouterMain;