import React from "react";
import { BrowserRouter } from "react-router-dom"; //yarn으로 다운로드한 라이브러리 안의 클래스
import RouterMain from "./RouterMain";
import './App.css';

const Root=()=>{

    return(
        <div>
            <BrowserRouter>
                <RouterMain/>
            </BrowserRouter>

        </div>
    )
}

export default Root;