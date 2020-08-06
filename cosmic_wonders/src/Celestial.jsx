import React,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Celestial extends Component{
  constructor(props){
    super(props);
    this.state={
      selected:null
    }
    this.onSelect=this.onSelect.bind(this);
  }

  onSelect(wonders){
    this.setState({selected:wonders})
  }

  showWonder(wonder){
    if(wonder!==null){
      return(
        <Card>
          <CardImg width="100%" src={wonder.image} alt={wonder.name} />
          <CardBody>
            <CardTitle>{wonder.name}</CardTitle>
            <CardText>{wonder.description}</CardText>
          </CardBody>
        </Card>
      )
    }
  }

  render(){
    const celestial=this.props.wonders.map(wonders=>{
      return(
        <div key={wonders.id} className="col-12 col-md-5 m-5">
          <Card tag="li" onClick={()=>this.onSelect(wonders)}>
            <CardImg width="100%" src={wonders.image} alt={wonders.name} />
            <CardImgOverlay>
              <CardTitle>{wonders.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      )
    });

    return(
      <div className="container">
        <div className="row">
          {celestial}
        </div>
        <div className="row">
          {this.showWonder(this.state.selected)}
        </div>
      </div>
    )
  }
}

export default Celestial;
