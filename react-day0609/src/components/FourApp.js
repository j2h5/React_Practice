import React, { useState } from 'react';

import img1 from '../image/s1.JPG';
import img2 from '../image/s2.JPG';
import img3 from '../image/s3.JPG';
import img4 from '../image/s4.JPG';
import img5 from '../image/s5.JPG';


const FourApp = () =>{
    
    const [hp1,setHp1] = useState();
    const [hp2,setHp2] = useState();
    const [hp3,setHp3] = useState();

    const [photo,setPhoto] = useState(1);
    
    
    const changePhoto=(e)=>{
        setPhoto(Number(e.target.value));
    }
    return (
        <div>
            <h3 className='alert'>! --FourApp-- !</h3>
            <select style={{color:'black'}} onChange={(e)=>{
                setHp1(e.target.value);
            }}>

                <option>010</option>
                <option>070</option>
                <option>011</option>
            </select>
            -
            <input type="text" pattern="[0-9]" maxLength="4" style={{width:'150px',color:'black'}}
            onChange={(e)=>{
                setHp2(e.target.value);
            }}></input>
            -
            <input type="number" min="1" max="9999" style={{width:'150px',color:'black'}}
            onKeyUp={(e)=>{
                setHp3(e.target.value);
            }}></input>
            <div>
                <h1>{hp1}-{hp2}-{hp3}</h1><br/>
                <div>
                <b>이미지 선택 : </b>
                <select className='from-control' style={{width:'150px',color:'black'}} onChange={changePhoto} >
                    <option value="1">철수</option>
                    <option value="2">민수</option>
                    <option value="3">영희</option>
                    <option value="4">길동</option>
                    <option value="5">순자</option>
                </select><br/><br/>
                <img src={photo===1?img1:photo===2?img2:photo===3?img3:photo===4?img4:img5} alt="" className='photo'/>
                </div>
            </div>
        </div>
    )
}

export default FourApp;