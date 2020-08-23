import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'

const CelestialDetail=(props)=>{
    return (
      <div className="container">
      <Breadcrumb>
        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/celestial">Celestial</Link></BreadcrumbItem>
        <BreadcrumbItem active>{props.id.name}</BreadcrumbItem>
      </Breadcrumb>
        <div className="row">
          <div className="col">
            <img src={props.id.image} style={{width:"220px",height:"220px",padding:"10px"}} alt={props.id.name} />
          </div>
          <div className="col "> <h3>{props.id.name} </h3> </div>
          <div className="col"> {props.id.description}  </div>
        </div>
      </div>
    )
}

export default CelestialDetail;
