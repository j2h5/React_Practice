import React, { useState } from "react";

const FiveApp = () =>{
    const [photo, setPhoto] = useState('../image2/c1.png')
    //이벤트 
    const pickPhoto = (e) =>{
        setPhoto(e.target.value);
    }
    return(
        <div>
            <h3 className="alert alert-danger">FiveApp 컴포넌트 입니다</h3>
            
            <div style={{fontSize:'20px'}} onChange={pickPhoto}>
                <b>인형 선택 : </b>
                {/* 라벨로 감싸주면 글씨만 클릭해도 체크됨 */}
                <label>
                <input type='radio' name="photo" value='../image2/c1.png' defaultChecked/>인형1
                </label>
                &nbsp;&nbsp;
                <label>
                <input type='radio' name="photo" value='../image2/c2.png' />인형2
                </label>
                &nbsp;&nbsp;
                <label>
                <input type='radio' name="photo" value='../image2/c3.png' />인형3
                </label>
                &nbsp;&nbsp;
                <label>
                <input type='radio' name="photo" value='../image2/c4.png' />인형4
                </label>
                &nbsp;&nbsp;
                <label>
                <input type='radio' name="photo" value='../image2/c5.png' />인형5
                </label>
                &nbsp;&nbsp;
                <label>
                <input type='radio' name="photo" value='../image2/c6.png'/>인형6
                </label>
                &nbsp;&nbsp;
                <label>
                <input type='radio' name="photo" value='../image2/c7.png' />인형7
                </label>
                &nbsp;&nbsp;
                <label>
                <input type='radio' name="photo" value='../image2/c8.png' />인형8
                </label>
            </div>
            <img alt = "" src = {photo} className='photo'/>
        </div>
    )
}

export default FiveApp;