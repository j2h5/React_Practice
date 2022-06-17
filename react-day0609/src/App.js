import OneApp from "./components/OneApp";
import TwoApp from "./components/TwoApp";
import ThreeApp from "./components/ThreeApp";
import FourApp from "./components/FourApp";
import FiveApp from "./components/FiveApp";
import SixApp from "./components/SixApp";
import React, { useState } from "react";



function App() {

  const [index,setIndex] = useState(6);

  return (
    <div className="App">
      <header className="App-header">
      <b>컴포넌트 선택하기</b>
      <select onChange={
        (e)=>{
          setIndex(Number(e.target.value))
        }
      } className="select" style={{color:'black'}}>
        <option value="1">OneApp</option>
        <option value="2">TwoApp</option>
        <option value="3">ThreeApp</option>
        <option value="4">FourApp</option>
        <option value="5">FiveApp</option>
        <option value="6" selected>SixApp</option>
      </select>
      {index===1?<OneApp/>:index===2?<TwoApp/>:index===3?<ThreeApp/>:index===4?<FourApp/>:index===5?<FiveApp/>:<SixApp/>}
      </header>
    </div>
  );
}

export default App;
