import React, {useState, useEffect} from "react";
import '../App.css';
import axios from "axios";
import MemoRowItem from "./MemoRowItem";


const Memo = () => {
    const [nickname, setNickname] = useState('');
    const [message, setMessage] = useState('');

    const [memoList, setMemoList] = useState([]);

    let memoUrl = "http://localhost:9001/memo/insert";

    const onInsert = (e) => {
        
        axios.post(memoUrl, { nickname, message })
        .then(res => {
            setNickname('');
            setMessage('');
        })
        .catch(err=>{
            alert(err);
        });
    }

    const list = () => {
        let listurl = "http://localhost:9001/memo/list";

        axios.get(listurl)
        .then(res=>{
            setMemoList(res.data);
        })
    }
    
    useEffect( () => {
        list();
    },[]);

    return (
        <div>
            <h1>memo</h1>
            <input type="text" className="memo_input" style={{width:'80px'}} 
            onChange={(e)=>{
                setNickname(e.target.value);
            }} placeholder="닉네임"/>
            <input type="text" className="memo_input" style={{width:'500px'}} 
            onChange={(e)=>{
                setMessage(e.target.value);
            }} placeholder="메모"/>
            <button type="button" onClick={onInsert}> 엔터 </button>

            <table>
            <thead>
            <tr>
                <th width='50'>닉</th>
                <th width='350'>메모</th>
                <th>날짜</th>
            </tr>
            </thead>
            <tbody>
                    {
                        memoList.map((row,idx)=>(
                            <MemoRowItem key={idx} idx={idx} row={row}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Memo;