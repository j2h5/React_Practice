import React,{useState} from "react";


const Fourth = () => {

    const [name, setName] = useState('이지호');
    const [age, setAge] = useState(29); 
    return(
        <div>
            <h2 className="alert alert-danger">FourthApp입니다
            <img src="../logo192.png" alt="" className="img-circle" style={{width:'40px'}}/></h2>
            <b style={{fontSize:'30px',fontFamily:'Dongle'}}>
                이름 : {name}  <span style={{marginLeft:'25px'}}/> 나이 : {age}세
            </b>
            <br/><br/>
            <button type="button" className="btn btn-default"
            style={{marginLeft:'60px'}}
            onClick={()=>{
                setName("이문희");
                setAge("40");
            }}>값변경</button>
            <button type="button" className="btn btn-default"
            style={{marginLeft:'10px'}}
            onClick={()=>{
                setName();
                setAge(0);
            }}>초기화</button>

        </div>
    )

}

export default Fourth;