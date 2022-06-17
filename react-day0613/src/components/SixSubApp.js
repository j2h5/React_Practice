import React,{useState} from "react";
import '../App.css';

const SixSubApp=(props)=>{
    return(
        <div>
            <div className="line">{props.name}님의 나이는 {props.age}입니다.</div>
        </div>
    )
}

export default SixSubApp;