import React from "react";
import '../App.css';
import {useParams} from 'react-router-dom';

const About=()=>{

    const {name}=useParams(); //usePrams로부터 name을 가져옴
    console.log({name}); //name이라는 객체를 콘솔에 출력
    console.log({name}.name); 
    return(
        <div>
            About.js<br/>
            안녕하세요 제 이름은 {name==null?'null':name}입니다.
        </div>
    )
}

export default About;