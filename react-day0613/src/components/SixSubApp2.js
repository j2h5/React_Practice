import React,{useState} from "react";
import '../App.css';

const SixSubApp2=({flower, price, linecolor})=>{
    
    return(
        <div>
            <div className="line" style={{borderColor:linecolor, color:linecolor}}>{flower} 한 단의 가격은 {price}입니다.</div>
        </div>
    )
}

export default SixSubApp2;