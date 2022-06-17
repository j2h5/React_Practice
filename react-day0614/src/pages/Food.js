import React from "react";
import '../App.css';
import {useParams, useNavigate} from 'react-router-dom';

const Food=()=>{

    const navi = useNavigate();

    const {food1}=useParams(); 
    const {food2}=useParams(); 
    //const {food1,food2}=useParams(); 
    
    return(
        <div>
            <h1>오늘의 식사 메뉴</h1>
            <button type="button" className="btn btn-primary"
            onClick={()=>{
                navi(-1);
            }}>이전페이지</button>
            <img src={`../../image/s${food1}.JPG`} alt=""/>
            <img src={`../../image/s${food2}.JPG`} alt=""/> 
        </div>
    )
}

export default Food;