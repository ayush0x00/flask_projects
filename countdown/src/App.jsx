import React,{Component} from 'react';
import './app.css'
import Clock from './Clock'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      'deadline':'November 19, 2020',
      'newDeadline':''
    }
  }


changeDeadline(){
  //never change state directly like this.state.deadline=""
  this.setState({deadline:this.state.newDeadline})
}

  render(){
    return(
      <div className='app'>
        <div className='title'>Countdown to {this.state.deadline}</div>
          <Clock deadline={this.state.deadline} />
        <div>
        <input
          id="textBox" type="text" placeholder="new Countdown"
          onChange={event=> this.setState({newDeadline:event.target.value})}
          />
        <button id="submitButton" type="submit" onClick={()=>this.changeDeadline()}>Change Countdown</button>
        </div>
      </div>
    )
  }
}

export default App;
