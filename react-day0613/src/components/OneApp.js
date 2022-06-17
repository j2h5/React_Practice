import React,{useState,useEffect} from "react";
import '../App.css';
import TextField from '@mui/material/TextField';

const OneApp=()=>{

    const [name,setName] = useState('이영자');
    const [addr,setAddr] = useState('강남구');

    useEffect(()=>{
        console.log("state변수가 값변경될 때마다 호출");
    });

    useEffect(()=>{
        console.log("처음 랜더링 시 한번만 호출");
    },[]); 

    //위는 많이 쓰지 않음 특정 메서드가 변경되면 호출되도록 하고 싶을때 
    useEffect(()=>{
        console.log("이름 변경시에만 호출!!!");
    },[name]); 

    return(
        <div>
            <br/>
            <h2>OneApp Component - useEffect</h2>
            <h3>이 름 : <input type = 'text' defaultValue={name} 
            onChange={(e)=>{
                setName(e.target.value
                )}}/></h3>
            <h3>주 소 : <input type = 'text' defaultValue={addr} 
            onChange={(e)=>{
                setAddr(e.target.value
                )}}/></h3>
                <hr/>
                <h2>이 름 : {name}</h2>
                <h2>주 소 : {addr}</h2>
        </div>
    )
}

export default OneApp;