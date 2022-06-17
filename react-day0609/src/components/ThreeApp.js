import React, { useState } from 'react';

const ThreeApp = () =>{
    
    const [message,setMessage] = useState('마우스 위치 출력');
    
    //이벤트
    const mouseEvent=(e)=>{
        let s = `마우스 위치 x:${e.pageX}, y:${e.pageY} 입니다`;
        //변수값에 + 등을 쓰는 대신 리터럴 (`)을 사용하면 편하다.
        setMessage(s);
    }

    return (
        <div onMouseMove={mouseEvent}>
            <h3 className='alert alert-danger'>! --ThreeApp-- !</h3>
            <br/>
            <h1 className='alert alert-info'>{message}</h1>
        </div>
    )
}

export default ThreeApp;