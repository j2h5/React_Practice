import React from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';

const Home=()=>{

    const navi = useNavigate(); 

    return (
        <div>
            Home
            <button type="button" className="btn btn-danger"
            onClick={()=>{
                navi("/about");
            }}>About</button>
            <button type="button" className="btn btn-info"
            onClick={()=>{
                navi("/about/abc");
            }}>About2</button>
            <button type="button" className="btn btn-success"
            onClick={()=>{
                navi("/food/11/12");
            }}>점심메뉴</button>
            <button type="button" className="btn btn-warning"
            onClick={()=>{
                navi("/food/8/9");
            }}>저녁메뉴</button>
        </div>
    )
}

export default Home;