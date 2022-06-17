import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import TenApp from './components/TenApp';

function App() {

    const[idx,setIdx] = useState(4);

    const selectComponent=(e)=>{
      //console.log(e.target.value);
      setIdx(Number(e.target.value));
    }
  
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div onClick={selectComponent}>
          <label><input type="radio" name="comp" defaultValue={1}/>OneApp</label>&nbsp;&nbsp;
          <label><input type="radio" name="comp" defaultValue={2} />TwoApp</label>&nbsp;&nbsp;
          <label><input type="radio" name="comp" defaultValue={3} />ThreeApp</label>&nbsp;&nbsp;
          <label><input type="radio" name="comp" defaultValue={4} defaultChecked/>FourApp</label>
          <label><input type="radio" name="comp" defaultValue={10}/>TenApp</label>
        </div>
        <br/><br/>
        {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:idx===4?<FourApp/>:<TenApp/>}
      </header>
    </div>
  );
}

export default App;
