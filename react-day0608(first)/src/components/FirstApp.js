import React from "react";
import './MyStyle.css';
import img16 from '../16.jpg';
import imgK054 from '../image/K-054.png';

const FirstApp = () =>  {
    //style 을 변수에 지정
    const styleImg1={
        width:'200px',
        border:'5px inset gray',
        marginLeft:'100px',
        marginTop:'20px'
    };

    return (
        // 주석
        <div>
            {/* 주석 */}
            <h2 className="line" style={{fontFamily:'Kdam Thmor Pro'}}>First App Component!!!</h2>
            <div style={{fontSize:'25px',color:'green',marginLeft:'100px'}}>
                안녕하세요. 반가워요! ! !
            </div>
            <img src={img16} style={styleImg1} alt=""/>
            <img src={imgK054} style={{width:'200px', marginLeft:'30px', borderRadius:'50px'}} alt=""/>

            <h3>public 영역의 이미지는 직접 호출 가능</h3>
            <img src='../logo192.png' alt=""/>
        </div>
    )

}

export default FirstApp;