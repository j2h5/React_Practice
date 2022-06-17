import React,{useState} from "react";
import '../App.css';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const ThreeApp=()=>{
    const [names,setNames] = useState(['강호동','유재석','송은이','김숙']);
    const [irum,setIrum] = useState('');

    //추가 버튼 이벤트
    const btnInsert = () => {
        if(irum===''){
            alert("Put Any Name!!!");
            return;
        }
        setNames(names.concat(irum)); //배열에 irum데이터 추가 - concat으로 배열에 추가(javaScript)
        setIrum('');
    }
    //입력 이벤트 - KeyUp or KeyPress
    const txtEnter = (e) => {
        if(e.key==='Enter'){
            btnInsert();
            e.target.value='';
        }
    }
    //입력 change 이벤트
    const txtInput = (e) => {
        setIrum(e.target.value);
    }
    //더블 클릭 시 이름 삭제 이벤트
    const dataRemove = (index) => {
        //console.log(index);
        //방법1 : index번지만 빼고 잘라서 넣음
        setNames([
            ...names.slice(0,index),
            ...names.slice(index+1,names.length)
        ]);

        //방법2 : index번지만 걸러냄 ㅇ
        setNames(names.filter((item,i)=>i!==index));
    }
    return(
        <div>
            <br/>
            <Alert severity="info">ThreeApp Component</Alert> <br/>
            <div>
            <TextField id="outlined-basic" label="Put Name" variant="outlined" 
            style={{backgroundColor:'white', width:'120px'}} size='small'
            onChange={txtInput}
            onKeyUp={txtEnter}
            value={irum}/>
            <Button variant="contained"
            onClick={btnInsert}>추가</Button>
            <br/>
            <h6>이름에서 더블클릭하면 삭제됩니다</h6>
            <ul>
                {
                    names.map((name,index)=>(
                        <li className="data" key={index} 
                        onDoubleClick={()=>dataRemove(index)}>{name}</li>
                    ))
                }
            </ul>
            </div>
        </div>
    )
}

export default ThreeApp;