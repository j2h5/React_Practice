import React, { useEffect, useState } from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const BoardForm=()=>{
    const navi = useNavigate();
    let loginok = localStorage.loginok;
    let id = localStorage.myid;

    const initFunc=()=>{
        if(loginok==null){
            alert("먼저 로그인 하세요");
            navi("/login")
        }
    }
    useEffect(()=>{
        initFunc();
    },[]);

    return(
        <div>
            <h1>BoardList</h1>
            <table style={{width:'400px'}}>
                <caption><h3>게시판 글쓰기</h3></caption>
                <tbody>
                    <tr>
                        <th style={{backgroundColor:"#ddd",width:'120px'}}>아이디</th>
                        <td>&nbsp;&nbsp;{id}</td>
                    </tr>
                    <tr>
                    <th style={{backgroundColor:"#ddd"}}>이미지</th>
                        <td><input type='file'/></td>
                    </tr>
                    <tr>
                        <th style={{backgroundColor:"#ddd"}}>제목</th>
                        <td><input type='text' required/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <textarea required style={{width:'400px',height:'120px'}}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">게시글저장</button>
                            <button type="button" onClick={()=>{
                                navi("/board/list")
                            }}>게시판 메인</button>
                        </td> 
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BoardForm;
