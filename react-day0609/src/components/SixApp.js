import React, { useState } from "react";

const SixApp = () => {
    const [show,setShow] = useState(true);
    const [visible,setVisible] = useState('visible');
    const [line,setLine] = useState('solid');
    const [color,setColor] =useState('pink');

    const changeLine =(e) => {
        setLine(e.target.value)
    }
    const changeColor = (e) => {
        setColor(e.target.value)
    }
    return(
        <div>
            <h1> -- Six App --</h1><br/>
            <button type="button" className="btn btn-info"
            onClick={()=>{
                //show===true?setShow(false):setShow(true)
                setShow(!show);
            }}>
                boolean으로 이미지 보였다 안보였다 하기
            </button>
            { show && <img src="../image2/c1.png" alt=""/> }
            <br/><br/>

            <button type="button" className="btn btn-warning"
            onClick={()=>{
                //visible==='visible'?setVisible('hidden'):setVisible("visible")
                setVisible(visible==='hidden'?'visible':'hidden')
            }}>
                style 로 이미지 보였다 안보였다 하기
            </button>

            <img src="../image2/c2.png" alt="" style={{visibility:visible, borderStyle:line, borderColor:color}} className='greenline' />
            <select onChange={changeLine} style={{color:'black'}}>
                <option>solid</option>
                <option>dotted</option>
                <option>dashed</option>
                <option>outset</option>
                <option>none</option>
            </select>
            <select onChange={changeColor} style={{color:'black'}}>
                <option>pink</option>
                <option>blue</option>
                <option>red</option>
                <option>black</option>
                <option>white</option>
                <option>gray</option>
            </select>
        </div>
    )
}

export default SixApp;