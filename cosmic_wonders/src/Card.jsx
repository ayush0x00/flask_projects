import React from "react";
import {
  Card, CardImg,  CardBody,
  CardTitle
} from 'reactstrap';
import {Link} from 'react-router-dom'

const LoneWonder=(props)=>{
    return(
      <div key={props.info.id} className="container" style={{margin:"15px"}}>
        <Card body inverse style={{ backgroundColor: '#333'}} >
        <Link to={`/Celestial/${props.info.id}`}>
          <CardImg style={{width:"200",height:"150px"}} top width="100%" src={props.info.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.info.name}</CardTitle>
          </CardBody>
      </Link>
      </Card>
      </div>
    )
  }

export default LoneWonder;
