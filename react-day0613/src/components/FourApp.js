import React,{useState, useRef} from "react";
import '../App.css';


const FourApp=()=>{

    const [count,setCount] = useState(0);

    //ref선언하는 방법
    const countRef = useRef(0);

    //state변수 증가하는 함수
    const stateIncre = () => {
        setCount(count+1);
    }

    //ref변수 증가하는 함수
    const refIncre=()=>{
        countRef.current = countRef.current+1;
        console.log("countRef="+countRef.current);
    }

    return(
        <div>
            <br/>
            <h2>FourApp Component</h2>
            <button type="button" className="btn btn-danger" onClick={stateIncre}>state변수 증가</button>
            <div className="number">{count}</div>

            <button type="button" className="btn btn-danger" onClick={refIncre}>ref변수 증가</button>
            <div className="number">{countRef.current}</div>
        </div>
    )
}

export default FourApp;