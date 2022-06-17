import React,{useState} from "react";
import '../App.css';

const ThreeApp=()=>{
    const [boards,setBoards]= useState([
        {
            no:1,
            writer:'이미자',
            subject:'hello',
            photo:'s1'
        },{
            no:2,
            writer:'삼미자',
            subject:'ohayo',
            photo:'s2'
        },{
            no:3,
            writer:'사미자',
            subject:'Hi',
            photo:'s3'
        },{
            no:4,
            writer:'오미자',
            subject:'hihi',
            photo:'s4'
        },{
            no:5,
            writer:'육미자',
            subject:'hey there',
            photo:'s5'
        }
    ])
    return(
        <div>
            <br/>
            <h2>ThreeApp Component</h2>
            <table className="table table-bordered" style={{width:'400px'}}>
                <caption><b>배열 객체 출력</b></caption>
                <thead>
                    <tr style={{backgroundColor:'#ddd',color:'black'}}>
                        <th width='60'>번호</th>
                        <th>사진</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:'#ddd',color:'black'}}>
                    {
                        boards.map((row,index)=>(
                            <tr key={index}>
                                <td>{row.no}</td>
                                <td><img src={`../image/${row.photo}.JPG`} alt=""></img></td>
                                <td>{row.subject}</td>
                                <td>{row.writer}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ThreeApp;