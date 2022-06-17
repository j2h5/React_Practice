import React,{useState} from "react";
import '../App.css';

const EightSubApp2=(props)=>{
    const [color,setColor] = useState('#ccccff');

    //버튼 이벤트
    const buttonEvent = () => {
        props.onAddColor(color);
    }
    
    return(
        <div style={{width:'500px'}}>
            <h5>EightSubApp2</h5>
            <div>
                <b>색상선택 : </b>
                <input type='color' defaultValue={color} style={{width:'100px'}}
                onChange={(e)=>{
                    setColor(e.target.value);
                }}/>
                <button type="button" onClick={buttonEvent}>색상추가</button>
            </div>

        </div>
    )
}

export default EightSubApp2;