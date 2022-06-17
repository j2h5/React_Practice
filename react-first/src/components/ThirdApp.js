import React,{useState} from "react";
import Fourth from "./FourthApp";

const ThirdApp = () => {
//상태관리를 위한 변수 설정
    const [message,setMessage] = useState('Happy Day'); // 초기값

    //이벤트 함수 선언
    const handleEnter = (e) => {
        if(e.key==='Enter'){
            setMessage('');
            e.target.value='';
        }
    }
    return(
        <div>
            <h2 className="alert alert-info" style={{fontFamily:'Dongle'}}>ThirdApp 입니다!</h2>


            <h3 style={{color:'red'}}>{message}</h3>
            <hr/>
            <h4>메세지를 입력해보세요</h4>
            <input type='text' style={{width:'300px',fontSize:'2em'}} 
            defaultValue={message}
            onChange={(e)=>{
                //console.log(e.target.value); //입력한값을 콘솔에 출력한다.

                //message 변수에 입력값을 넣기 ↓
                setMessage(e.target.value);
            }}
            onKeyUp = {handleEnter}
            />
            
            <hr/>
            <Fourth/>
        </div>
    )
}

export default ThirdApp;