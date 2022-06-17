import React,{useState} from "react";
import '../App.css';
import Alert from '@mui/material/Alert';

const OneApp=()=>{

    //배열변수 선언
    const names = ['ABC','DEF','GHI','JKL','MNO'];
    //반복문을 변수에 저장 후 출력해도됨
    const nameList = names.map((name)=>(<li>{name}</li>)); //<li>가 리턴
    
    //색상을 배열로
    const colors = ['red','green','gray','magenta','pink','cyan','yellow','orange'];
    return(
        <div>
            <br/>
            <Alert severity="error">One App Component</Alert>
        
            <div>
                <h3>map 반복문 연습</h3>
                <ol>{nameList}</ol>
                <hr/>
                <ul>
                    {
                        names.map((name,index)=>(<b>{index}:{name}&nbsp;</b>))
                    }
                </ul>
                <hr/>
                {
                    colors.map((color)=>(<div className="box" style={{backgroundColor:color}}/>))
                }
            </div>
        </div>
    )
}

export default OneApp;