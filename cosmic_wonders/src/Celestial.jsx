import React, {Component} from 'react';
import {wonders} from './shared/data.js'
import {Row,Col} from 'reactstrap'
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
}

showDetails(){
  if(this.state.clicked!==-1)
  return(
    <div  className="container">
      <Row key={this.state.wonders.id}>
        <Col>
          <img style={{width:"318px",height:"180px"}}src={this.state.wonders[this.state.clicked].image} alt={this.state.wonders.name}></img>
          {this.state.wonders[this.state.clicked].name}
          {this.state.wonders[this.state.clicked].description}
        </Col>
      </Row>

    </div>
  )
}

beautify(wonder){
  const beautiful=wonder.map(wonders=>{
    return(
      <div key={this.state.wonders.id} className="col-md-3">{wonders}</div>
      )
  })
  return(beautiful)
}
  render(){
      const displayWonder=this.state.wonders.map(wonders=>{
        return(
          <LoneWonder key={wonders.id} info={wonders} onClickBtn={(id)=>this.onClick(id)} />
    )})
      return(
    <div key={this.state.wonders.id} className="container">
      <Row key={this.state.wonders.id} className="justify-content-centre row-md-3">
          {this.beautify(displayWonder)}
      </Row>
      <Row key={this.state.wonders.id}>
        {this.showDetails()}
      </Row>
    </div>
  )
}
}
export default Celestial;
