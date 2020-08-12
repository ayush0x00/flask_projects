import React, {Component} from 'react';
import {wonders} from './shared/data.js'
import {Row,Col} from 'reactstrap'
import LoneWonder from './Card'

class Celestial extends Component{
  constructor(props){
    super(props);
    this.state={
      wonders:this.props.wonders,
    }
  }

beautify(wonders){
  const beautiful=wonders.map((wonders,i)=>{
    i=i+1;
    return(
      <div key={wonders.key+i} className="col-md-3">{wonders}
      </div>
      )
  })
  return(beautiful)
}
  render(){
      const displayWonder=this.state.wonders.map(wonders=>{
        return(
          <div>
          <LoneWonder  info={wonders} />
          {/*working console.log(wonders.id)*/}
          </div>
    )})
      return(
    <div  className="container">
      <Row  className="justify-content-center row-md-3">
          {this.beautify(displayWonder)}
      </Row>
    </div>
  )
}
}
export default Celestial;
