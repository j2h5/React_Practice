import React,{useState} from "react";
import './MyStyle.css';

const FifthApp = () => {

    const [name,setName] = useState(''); 
    const [java,setJava] = useState(0); 
    const [spring,setSpring] = useState(0);
    const [total,setTotal] = useState(0);
    const [avg,setAvg] = useState('');

    return(
        <div>
            <hr/>
            <h2 className="alert alert-success">FifthApp</h2>

            <div className="inp">
            이름 : <input type='text' style={{width:'100px'}} 
            onChange={(e)=>{
                setName(e.target.value);
            }}/><span style={{marginLeft:'10px'}}>{name}</span>
            <br/>


            자바 : <input type='text' style={{width:'100px'}} 
            onChange={(e)=>{
                setJava(e.target.value);
            }}/><span style={{marginLeft:'10px'}}>{java}</span>
            <br/>


            스프링 : <input type='text' style={{width:'100px'}} 
            onChange={(e)=>{
                setSpring(e.target.value);
            }}/><span style={{marginLeft:'10px'}}>{spring}</span>
            <br/>

            <button type="button" className="btn btn-info"
            style={{marginLeft:'100px'}}
            onClick = {() => {
                setTotal(Number(java)+Number(spring));
                setAvg((Number(java)+Number(spring))/2);
            }}
            >결과확인</button>
            </div>
            

            <div className="result">
                이름 : {name} <br/>
                자바점수 : {java} 점 <br/>
                스프링점수 : {spring} 점 <br/>
                총 점 : {total} 점 <br/>
                평 균 : {avg} 점 <br/>
            </div>

        </div>
    )
}

export default FifthApp;