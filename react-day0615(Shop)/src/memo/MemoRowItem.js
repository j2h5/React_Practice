import React from "react";
import '../App.css';

const MemoRowItem=({idx,row})=>{

    return (
        <tr>
            <td><b>{row.nickname}</b></td>
            <td>{row.message}</td>
            <td>{row.writeday}</td>
            <td><button type="button">x</button></td>
        </tr>
    )
}

export default MemoRowItem;