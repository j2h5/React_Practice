import React,{useState} from "react";
import '../App.css';
import Alert from '@mui/material/Alert';
import img1 from '../image2/s1.JPG';
import img2 from '../image2/s2.JPG';
import img3 from '../image2/s3.JPG';
import img4 from '../image2/s4.JPG';
import img5 from '../image2/s9.JPG';

const TwoApp=()=>{
    //이미지를 배열 변수에 넣기
const imgArr = [img1, img2, img3, img4, img5];
const photoArr = ['./image/9.jpg','./image/8.jpg','./image/10.jpg','./image/11.jpg','./image/12.jpg'];
//const photoArr = ['8','9','10','11','12']
    return(
        <div>
            <br/>
            <Alert severity="warning">TwoApp Component</Alert>
            <br/>
            <h4>scr의 이미지를 배열로 넣어 반복하기</h4>
            {
                imgArr.map((img)=>(<img src={img} alt="" style={{marginLeft:'20px'}}/>))
            }

            <h4>public의 이미지를 배열에 넣어 반복하기</h4>
            {
                photoArr.map((photo)=>(<img src={photo} alt="" className="photo"/>))
               //photoArr.map((photo)=>(<img src={`../image/${photo}.jpg`} alt="" className="photo"/>))
            }

        </div>
    )
}
export default TwoApp;