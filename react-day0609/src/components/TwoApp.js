import React,{Component, component} from 'react';
import '../App.css';

class TwoApp extends Component
{
    constructor(props){
        super(props);
        this.state={
            number:0
            //setState  /  this로 접근
        }
        //이벤트 등록
        this.numberIncre=this.numberIncre.bind(this);
        this.numberDecre=this.numberDecre.bind(this);
    }

    //이벤트 함수
    numberIncre=()=>{
        this.setState({
            number:this.state.number+1
        })
    } 
    numberDecre=()=>{
        this.setState({
            number:this.state.number-1
        })
    } 
    
    render(){
        return(
            <div>
                <h3 className='alert alert-success'>TwoApp(클래스타입)</h3>
                <div className='number'>{this.state.number}</div>
                <button type="button" className="btn btn-default btn-lg" onClick={this.numberIncre}>증가</button>
                <button type="button" className="btn btn-default btn-lg" onClick={this.numberDecre}>감소</button>
            </div>
        )
    }
}

export default TwoApp;