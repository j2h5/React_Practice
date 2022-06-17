import React,{useState} from "react";
import '../App.css';

const EightSubApp=({ChangeColor,ChangeMessage,ChangePhoto})=>{

    
    return(
        <div>
            <input type="color" onChange={ChangeColor}></input>
            <input type="text" onChange={ChangeMessage}></input>
            <select onChange={ChangePhoto}>
                <option>s1</option>
                <option>s2</option>
                <option>s3</option>
                <option>s4</option>
                <option>s5</option>
            </select>
        </div>
    )
}

export default EightSubApp;