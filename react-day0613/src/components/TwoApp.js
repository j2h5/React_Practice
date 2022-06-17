import React,{useState} from "react";
import '../App.css';

const TwoApp=()=>{

    const [inputs,setInputs] = useState({
        name:'강호동',
        addr:'강남구',
        age:20
    });

    const changeData=(e)=>{
        console.log("name:"+e.target.name);
        console.log("value:"+e.target.value);

        //name, value 값 얻기
        const {name,value} = e.target;
        //변경
        setInputs({
            ...inputs, //펼침연산자 - 기존의 멤버값은 그대로
            [name]:value
        })
    }
    return(
        <div>
            <br/>
            <h2>TwoApp-State를 객체로</h2>
            <h3>이 름 : <input type='text' name='name' defaultValue={inputs.name} 
            onChange={changeData}/></h3>
            <h3>주 소 : <input type='text' name='addr' defaultValue={inputs.addr} 
            onChange={changeData}/></h3>
            <h3>나 이 : <input type='text' name='age' defaultValue={inputs.age} 
            onChange={changeData}/></h3>
        <hr/>
        <h2>이 름 : {inputs.name},{inputs['name']}</h2>
        <h2>주 소 : {inputs.addr},{inputs['addr']}</h2>
        <h2>나 이 : {inputs.age},{inputs['age']}</h2>
        
        </div>
    )
}

export default TwoApp;