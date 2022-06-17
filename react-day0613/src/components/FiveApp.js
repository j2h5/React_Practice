import React,{useReducer, useRef, useState} from "react";
import '../App.css';

const FiveApp=()=>{

    const [result,setResult] = useState('');
    const nameRef = useRef('');
    const KorRef = useRef('');
    const engRef = useRef('');
    const matRef = useRef('');

    const buttonReusult = () => {
        // 데이터 읽어오기
        let name = nameRef.current.value;
        let kor = Number(KorRef.current.value);
        let eng = Number(engRef.current.value);
        let mat = Number(matRef.current.value);
        let tot = kor + eng + mat;
        let avg = (tot/3).toFixed(2);

        let r = `[결과확인]
        이 름 : ${name}
        국어점수 : ${kor}
        영어점수 : ${eng}
        수학점수 : ${mat}
        총  점 : ${tot}
        평  균 : ${avg}`;

        setResult(r);
        //초기화
        nameRef.current.value='';
        KorRef.current.value='';
        engRef.current.value='';
        matRef.current.value='';
        //포커스
        nameRef.current.focus();
    }

    return(
        <div>
            <br/>
            <h2>FiveApp Component</h2>
            <h6>이름입력 : <input type="text" ref={nameRef}/></h6>
            <h6>국어점수 : <input type="text" ref={KorRef}/></h6>
            <h6>영어점수 : <input type="text" ref={engRef}/></h6>
            <h6>수학점수 : <input type="text" ref={matRef}/></h6>
            <button type="button" className="btn btn-danger"
            onClick={buttonReusult}>결과 확인</button>
            <h6 className="alert alert-info" style={{whiteSpace:'pre-wrap'}}>{result}</h6>

        </div>
    )
}

export default FiveApp;