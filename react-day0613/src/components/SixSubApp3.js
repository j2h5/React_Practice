import React,{useState} from "react";
import '../App.css';

//props
const SixsubApp3=(props)=>{
//const SixsubApp3=({incre,decre})=>{ 이케가능

    return(
        <div>
            
            <div style={{width:'700px'}}>  
                <button type="button" className="btn btn-success" style={{marginLeft:'60px'}}
                onClick={()=>{
                    props.decre(); //부모컴포넌트의 이벤트 발생
                    //decre();
                }}>감소</button>
                    
                <button type="button" className="btn btn-success" style={{marginLeft:'60px'}}
                onClick={()=>{
                    props.incre(); //부모컴포넌트의 이벤트 발생
                    //incre();
                }}>증가</button>
            </div>
        </div>
    )
}
export default SixsubApp3;