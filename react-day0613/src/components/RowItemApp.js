import React,{useState} from "react";
import '../App.css';

//const RowItemApp=({row, onDelete, idx})=>{
    const RowItemApp=(props)=>{
        let {row,idx,onDelete}=props;

    //삭제이벤트
    const btnDelete=()=>{
        onDelete(idx); //부모가 props로 보낸 이벤트 호출
    }
    return(
        <tr style={{fontSize:'20px'}}>
            <td>{row.name}</td>
            <td>
                <img src={`../image/${row.photo}.JPG`} alt=""
                style={{width:'100px',height:'100px',border:'1px solid gray'}}/>
            </td>
            <td>{row.blood}형</td>
            <td>{row.today.toLocaleDateString('ko-KR')}</td>
            <td>
                <button type="button" onClick={()=>{ btnDelete(idx) }}>삭제</button>
            </td>
        </tr>
    )
}

export default RowItemApp;