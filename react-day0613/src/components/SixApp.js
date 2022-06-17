import React,{useState} from "react";
import '../App.css';
import SixsubApp from "./SixSubApp";
import SixsubApp2 from "./SixSubApp2";
import SixsubApp3 from "./SixSubApp3";

const SixApp=()=>{
    const [number,setNumber]=useState(10);
    //증가 이벤트 함수
    const numberIncre=()=>{
        setNumber(number+1);
    }
    //감소 이벤트 함수
    const numberDecre=()=>{
        setNumber(number-1);
    }

    return(
        <div>
            <h3 className="alert alert-danger" style={{width:'700px'}}>Six App - 부모, 자식 component간 통신</h3>
            
            <h4>▶ 자식 SixSubApp 호출 - props</h4>
            <SixsubApp name1="캔디" age="23"/>
            <SixsubApp name1="테리우스" age="31"/>
            <SixsubApp name1="마징가" age="29"/>

            <br/>
            <h4>▶ 자식 SixSubApp2 호출 - flower, price, linecolor </h4>
            <SixsubApp2 flower="장미" price="12000" linecolor="red"/>
            <SixsubApp2 flower="수국" price="15000" linecolor="blue"/>
            <SixsubApp2 flower="라넌큘라스" price="21000" linecolor="green"/>

            <br/>
            <h4>▶ 자식 SixSubApp3 호출 - 이벤트</h4>
            <div className="number" style={{marginLeft:'120px'}}>{number}</div>
            <SixsubApp3 incre={numberIncre} decre={numberDecre}/>
        </div>
    )
}

export default SixApp;