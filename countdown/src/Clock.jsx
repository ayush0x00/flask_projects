import React , {Component} from 'react'
import './app.css'

class Clock extends Component{
  constructor(props){
    super(props)
    this.state={
      days:0,
      hours:0,
      minutes:0,
      seconds:0
    }
  }

  UNSAFE_componentWillMount(){
    this.getTimeRemaining(this.props.deadline)
  }

  componentDidMount(){
    setInterval(()=>this.getTimeRemaining(this.props.deadline,1000))
    //  this.setState({days,hours,seconds,minutes})
  }

  getTimeRemaining(deadline){
    const time= Date.parse(deadline)-Date.parse(new Date())
    const seconds=Math.floor((time/(1000))%60)
    const minutes=Math.floor((time/(1000*60))%60)
    const hours=Math.floor((time/(1000*60*60))%24)
    const days=Math.floor((time/(1000*60*60*24)))
    this.setState({days,hours,seconds,minutes})
  }

  render(){
    return(
      <div>
      <div className='days'>{this.state.days} days</div>
      <div className='hours'> {this.state.hours} hours</div>
      <div className='minutes'> {this.state.minutes} minutes</div>
      <div className='seconds'> {this.state.seconds} seconds</div>
      </div>
    )
  }

}

export default Clock;
