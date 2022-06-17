import React from "react";
import '../App.css';
import {useParams} from 'react-router-dom';

const Food1=()=>{

    const {name}=useParams(); //usePrams로부터 name을 가져옴
    return(
        <div>
            <h1>오늘의 점심 메뉴</h1>
            <img src="./image/s1.JPG" alt=""/>
            <img src="./image/s2.JPG" alt=""/>
        </div>
    )
}

export default Food1;