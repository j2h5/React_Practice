import React, { useState } from "react";
import '../App.css';

const OneApp = () => {

    const [number,setNumber] = useState(0);

    const numberIncre=()=>{

        if(number===10){
            alert("10까지만 증가됩니다");
            return;
        }

        setNumber(number+1);
    }
    const numberDecre=()=>{
        if(number===-10){
            alert("그만");
            return;
        }
        setNumber(number-1);

    }

    return(
        <div>
            <h3 className="alert alert-info">OneApp 컴포넌트입니다</h3>
            <div className="number">{number}</div>
            <button type="button" className="btn btn-default btn-lg" onClick={numberIncre}>증가</button>
            <button type="button" className="btn btn-default btn-lg" onClick={numberDecre}>감소</button>
        </div>
    )
}

export default OneApp;