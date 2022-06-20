import React,{useState} from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Member=()=>{
    const [data,setData] = useState({
        id:'', name:'', pass:'', email:'', hp:'', addr:''
    });
    const [passOk,setPassOk] = useState(false);
    const [email1,setEmail1] = useState('');
    const [email2,setEmail2] = useState('');
    const [btnOk,setBtnOk] = useState(false);

    //submit 시 호출 될 함수
    const onSave = (e) => {
        e.preventDefault();//기본이벤트무효화

        //이메일 합치기
        setData({
            ...data,
            email:`${email1}@${email2}`
        })
        console.dir(data);

        if(!btnOk){
            alert("아이디 중복체크를 해주세요");
            return;
        }

        if(!passOk){
            alert("비밀번호 확인을 해주세요");
            return;
        }
    }

    // data 관련 데이터 입력 시 호출
    const onDataChange = (e) => {
        const {name,value} = e.target;
        //이벤트 발생 name이 pass일 경우 무조건 passOk는 false
        if(name==='pass')
            setPassOk(false);
        setData({
            ...data,
            [name]:value
        })
    }

    //이메일 select 변경 시 호출
    const onEmailChange = (e) => {
        const {value} = e.target;
        if(value==='-')
            setEmail2('');
        else
            setEmail2(value);
    }

    //2번째 pass 입력 시 호출
    const onPassChange = (e) => {
        const {value} = e.target;
        if(value===data.pass)
            setPassOk(true);
        else
            setPassOk(false);
    }

    return (
        <div className="member_form">
            <form onSubmit={onSave}>
            <table style={{width:'500px', marginLeft:'50px'}} className="member_form">
                <caption><h3>회원가입</h3></caption>
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td>
                            <input type="text" style={{width:'100px'}} name="id" required onChange={onDataChange} defaultValue={data.id}/>
                            <button type="button" style={{marginLeft:'5px'}}>중복체크</button>
                        </td>
                    </tr>

                    <tr>
                        <th>이름</th>
                        <td>
                            <input type="text" style={{width:'170px'}} name="name" required onChange={onDataChange}/>
                        </td>
                    </tr>

                    <tr>
                        <th>비밀번호</th>
                        <td>
                            <input type="password" style={{width:'170px'}} name="pass" required onChange={onDataChange}/>
                            <input type="password" style={{width:'170px', marginLeft:'5px'}} required onChange={onPassChange}/>
                            <span style={{marginLeft:'5px', color:'red'}}>{passOk?'ok':''}</span>
                        </td>
                    </tr>

                    <tr>
                        <th>이메일</th>
                        <td>
                            <input type="text" style={{width:'100px'}} required
                            onChange={(e)=>{  setEmail1(e.target.value);  }}/>
                            &nbsp;<b>@</b>&nbsp;
                            <input type="text" style={{width:'100px'}} defaultValue={email2}
                            onChange={(e)=>{  setEmail2(e.target.value);  }}/>&nbsp;&nbsp;
                            <select onChange={onEmailChange}>
                                <option value='-'>직접입력</option>
                                <option value='naver.com'>네이버</option>
                                <option value='gmail.com'>구글</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <th>핸드폰</th>
                        <td>
                            <input type="text" style={{width:'180px'}} name="hp" required onChange={onDataChange}/>
                        </td>
                    </tr>

                    <tr>
                        <th>주소</th>
                        <td>
                            <input type="text" style={{width:'180px'}} name="addr" required onChange={onDataChange}/>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2} style={{textAlign:'center'}}>
                            <button type="submit">가입하기</button>
                            <button type="button" style={{marginLeft:'5px'}}>회원명단</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </form>
        </div>
    )
}

export default Member;