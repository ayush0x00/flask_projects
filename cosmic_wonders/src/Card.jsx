import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Row,Col
} from 'reactstrap';

const LoneWonder=(props)=>{
    return(
      <Card>
        <CardImg top src={props.info.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.info.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{props.info.description}</CardText>
          <Button color="info" onClick={()=>props.onClickBtn(props.info.id)}>Button</Button>
        </CardBody>
      </Card>
    )
  }

export default LoneWonder;
