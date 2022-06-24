import React, { useReducer, useState } from 'react';
import '../App.css';
import Student from './Student';

const initialState = {
    count : 1,
    students:[
        {
            id: Date.now(), //시간에 대한 고유값 (똑같을리 없음)
            name: 'Bori',
            isHere:false
        }
    ]
}

//reducer 설정 - 학교 역할
const reducer = (state, action) =>{
    console.log(state, action);

    switch(action.type){
        case 'add-student' :
            //dispatch 에서 전달하는 name을 변수 name에 저장
            const name = action.payload.name;

            //학생 정보를 생성해서 배열에 추가
            const addStudent = {
                id : Date.now(),
                name,
                isHere: false
                };

                return {
                    count : state.count+1,
                    students:[...state.students, addStudent]
                    //[기존 배열..., +추가된 student]
                };

            case 'delete-student':
                return {
                    count : state.count-1,
                    students:state.students.filter(student=>student.id!==action.payload.id)
                    //action에서 id값 받아온게 state의 student랑 같지 않은 것만 삭제
                    };
                
            case 'mark-student':
                return{
                    const : state.count,
                    students: state.students.map(student=>{
                            if(student.id===action.payload.id){
                                return{...student, isHere:!student.isHere}
                                //나머지 속성은 그대로, isHere만 반대로 (검정, 회색)
                            }
                        return student;
                        })
                    }

            default:
                return state;
    }
}

const ReducerComp2 = () => {
    const [name, setName] = useState('');
    const [studentInfo, dispatch] = useReducer(reducer, initialState) //useReducer(함수, 초깃값)

    return (
        <div>
            <h2>Reducer 학교에 오신 것을 환영합니다 (^ㅅ^) </h2>
            <h3>총 학생수 : {studentInfo.count}</h3>
            
            <div className='form-inline'>
            <input type= {'text'} className="form-control" 
            style={{width:'120px'}} placeholder="이름입력"
            defaultValue={name} onChange={(e)=>{
                setName(e.target.value);
            }}/>

            <button type='button' className='btn btn-success btn-sm'
            style={{marginLeft:'10px'}}
            onClick={()=>{
                dispatch({'type':'add-student', payload:{name}})
            }}>
                추가
            </button>

            <br/><br/>
            {
                studentInfo.students.map(student=>{
                    return (
                        <Student name = {student.name} key={student.id}
                        dispatch={dispatch} //dispatch 전달 : 이벤트 호출
                        id={student.id} isHere={student.isHere}/>
                    )
                })
            }
            </div>
        </div>
    );
};

export default ReducerComp2;