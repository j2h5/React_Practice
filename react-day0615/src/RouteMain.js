import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import {About, Main, Menu, Title, Info} from './components';
import {Shop, ShopForm, ShopDetail, ShopUpdate } from './shop';
import Board from "./board/Board";
import Login from "./login/Login";
import Member from "./member/Member";
import errimg from "./image/er.png"

const RouteMain=()=>{

    return (
        <div>
            <div className="Title"><Title/></div>
            <div className="Info"><Info/></div>
            <div className="Menu"><Menu/></div>
            <div className="main">
                <Routes>
                <Route path="/" element={<Main/>}/>
                {/* Shop */}
                <Route path="/shop/list" element={<Shop/>}/>
                <Route path="/shop/form" element={<ShopForm/>}/>
                <Route path="/shop/detail/:num" element={<ShopDetail/>}/>
                <Route path="/shop/updateform/:num" element={<ShopUpdate/>}/>
                
                <Route path="/board/list" element={<Board/>}/>
                <Route path="/member/form" element={<Member/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/about" element={<About/>}/>

                <Route path="*" element={
                    <div>
                        <img src={errimg} alt=""/>
                        <h1>잘못된 URL주소입니다</h1>
                    </div>
                }/>
                </Routes>
            </div>
        </div>
    )
}

export default RouteMain;