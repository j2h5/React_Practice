import React,{useState,useEffect} from "react";
import '../App.css';
import RowItemApp from "./RowItemApp";
import WriteForm from "./WriteForm";

const SevenApp=()=>{
    const [board, setBoard] = useState([
        {
            name:'이영자',
            photo:'s2',
            blood:'AB',
            today:new Date()
        },{
            name:'삼영자',
            photo:'s3',
            blood:'A',
            today:new Date()
        },{
            name:'사영자',
            photo:'s4',
            blood:'B',
            today:new Date()
        }
    ]);
    //데이터 추가하는 함수 이벤트
    const dataSave = (data) => {
        setBoard(board.concat({
            /*
            name:data.name
            photo:data.photo
            blood:data.blood
            */
            ...data, //name에 name이 들어가고 photo에 photo가 들어가 blood에 blood가 들어감
            today : new Date()
        }));
    }
    //데이터 삭제 이벤트
    // const onDelete = (index) => {
    //     setBoard(board.filter(boards => boards.i!== index));
    // };

    const onDelete = (index) => {
        setBoard(board.filter( (item,i) =>i!== index ));
    };
    
    return(
        <div>
            <h3>SevenApp</h3>
            <WriteForm onSave={dataSave}/> {/* dataSave라는 이벤트를 onsave란 이름으로 전송 */}
            <table className="table table-bordered">
                <caption>Board 배열 출력</caption>
                <thead>
                    <tr style={{backgroundColor:'orange'}}>
                        <th width='100'>이름</th>
                        <th width='130'>사진</th>
                        <th width='90'>혈액형</th>
                        <th width='150'>날짜</th>
                        <th width='90'>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        board.map(  (row,index)  =>  (<RowItemApp row={row} key={index} idx={index} onDelete={onDelete}/>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SevenApp;