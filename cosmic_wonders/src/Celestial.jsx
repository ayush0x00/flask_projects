import React, {Component} from 'react';
import {Row,Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
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
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
        <BreadcrumbItem active>Celestial</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Row  className="justify-content-center row-md-3">
          {this.beautify(displayWonder)}
      </Row>
    </div>
  )
}
}
export default Celestial;
