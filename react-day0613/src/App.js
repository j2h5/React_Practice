import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import TenApp from './components/TenApp';
import Radio from '@mui/material/Radio';
import FiveApp from './components/FiveApp';
import SixApp from './components/SixApp';
import SevenApp from './components/SevenApp';
import EightApp from './components/EightApp';

function App() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });


    const[idx,setIdx] = useState(8);

    const selectComponent=(e)=>{
      //console.log(e.target.value);
      setIdx(Number(e.target.value));
    }
  
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div onClick={selectComponent}>
        <label><Radio {...controlProps('c')} color="success" name="comp" defaultValue={1}/></label>&nbsp;&nbsp;
          <label><input type="radio" name="comp" defaultValue={1} />OneApp</label>&nbsp;&nbsp;
          <label><input type="radio" name="comp" defaultValue={2} />TwoApp</label>&nbsp;&nbsp;
          <label><input type="radio" name="comp" defaultValue={3} />ThreeApp</label>&nbsp;&nbsp;
          <label><input type="radio" name="comp" defaultValue={4} />FourApp</label>
          <label><input type="radio" name="comp" defaultValue={5} />FiveApp</label>
          <label><input type="radio" name="comp" defaultValue={6} />SixApp</label>
          <label><input type="radio" name="comp" defaultValue={7}/>SevenApp</label>
          <label><input type="radio" name="comp" defaultValue={8} defaultChecked/>EightApp</label>
          <label><input type="radio" name="comp" defaultValue={10}/>TenApp</label>
        </div>
        <br/><br/>
        {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:idx===4?<FourApp/>:idx===5?<FiveApp/>:idx===6?<SixApp/>:idx===7?<SevenApp/>:idx===8?<EightApp/>:<TenApp/>}
      </header>
    </div>
  );
}

export default App;
