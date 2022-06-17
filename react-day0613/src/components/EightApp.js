import React,{useState} from "react";
import '../App.css';
import EightSubApp from "./EightSubApp";
import EightSubApp2 from "./EightSubApp2";

const EightApp=()=>{

    const [color,setColor] = useState('magenta');
    const [message,setMessage] = useState('Have a Nice Day');
    const [photo,setPhoto] = useState('s5');

    const [likeColor,setLikeColor] = useState(['pink','yellow','gray']);
    
    const ChangeColor = (e) => {
        setColor(e.target.value);
    }
    const ChangeMessage = (e) => {
        setMessage(e.target.value);
    }
    const ChangePhoto = (e) => {
        setPhoto(e.target.value);
    }

    //더블 클릭 시 색상 제거
    const deleteLikeColor = (idx) => {
        setLikeColor(likeColor.filter((a,i)=>(i!==idx)));
    }

    //색상 추가 이벤트
    const addColorEvent = (co) => {
        setLikeColor(likeColor.concat(co));
    }

    // const ChangeColorRef =

    return(
        <div>
            <h3>EightApp - parent,children co-pro</h3>
            
            <h1 style={{color:color}}>{message}</h1>
            <img alt="" src={`../image/${photo}.JPG`}/>
            <br style={{clear:'both'}}/><br/>
            <EightSubApp ChangeColor={ChangeColor} ChangeMessage={ChangeMessage} ChangePhoto={ChangePhoto}/>
            <br/><br/>
            {
                likeColor.map( (co,idx) => (<div className="circle" key={idx} style={{backgroundColor:co}}
                onDoubleClick={()=>{
                    deleteLikeColor(idx);
                }}>{idx}</div>))
            }
            <br style={{clear:'both'}}/>
            <EightSubApp2 onAddColor={addColorEvent}/>
        </div>
    )
}

export default EightApp;