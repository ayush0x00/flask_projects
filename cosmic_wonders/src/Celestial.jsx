import React, {Component} from 'react';
import {wonders} from './shared/data.js'
import { CardDeck,Row,Col} from 'reactstrap';
import LoneWonder from './Card'

class Celestial extends Component{
  constructor(props){
    super(props);
    this.state={
      wonders:wonders,
      clicked:-1
    }
  }

onClick(id){
    this.setState({clicked:id})
    //console.log(this.state.clicked);
}



  render(){
      const displayWonder=this.state.wonders.map(wonders=>{
        return(
          <LoneWonder key={wonders.id} info={wonders} onClickBtn={(id)=>this.onClick(id)} />
    )})
      return(
    <div className="container">
      <div className="row">
        {displayWonder}
      </div>
      <div>
      </div>
    </div>
  )
}
}
export default Celestial;
