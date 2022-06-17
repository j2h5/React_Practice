import React from "react";
import '../App.css';
import {useParams} from 'react-router-dom';

const Food1=()=>{

    const {name}=useParams(); //usePrams로부터 name을 가져옴
    return(
        <div>
            <h1>오늘의 저녁 메뉴</h1>
            <img src="./image/s3.JPG" alt=""/>
            <img src="./image/s4.JPG" alt=""/>
        </div>
    )
}

export default Food1;