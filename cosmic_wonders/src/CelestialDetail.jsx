import React,{Component} from 'react';
import {Button, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class CelestialDetail extends Component{
  constructor (props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
handleClick=()=>{
  const component=()=>{
    return(<div>Hello</div>)}
  return component
}
  render(){
    return(
      <div className="container">
      <Breadcrumb>
        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/celestial">Celestial</Link></BreadcrumbItem>
        <BreadcrumbItem active>{this.props.id.name}</BreadcrumbItem>
      </Breadcrumb>
        <div className="row">
          <div className="col">
            <img src={this.props.id.image} style={{width:"220px",height:"220px",padding:"10px"}} alt={this.props.id.name} />
          </div>
          <div className="col"> <h3>{this.props.id.name} </h3>
          <Button className="primary" onClick={this.handleClick}>Add a comment </Button>
          </div>
          <div className="col"> {this.props.id.description}  </div>
        </div>
      </div>
    )
}
}

export default CelestialDetail;
