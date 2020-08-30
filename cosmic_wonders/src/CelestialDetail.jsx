import React,{Component} from 'react';
import {Button, Breadcrumb, BreadcrumbItem,Label,Row,Col,Modal,ModalBody
,ModalHeader,ModalFooter} from 'reactstrap';
import {Control,LocalForm} from 'react-redux-form'
import {Link} from 'react-router-dom';

class CelestialDetail extends Component{
  constructor (props){
    super(props);
    this.state={
      isModalOpen:false
    }
    this.handleClick=this.handleClick.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
  }
handleClick=()=>{
  console.log(this.props)
  this.setState({
    isModalOpen:!this.state.isModalOpen
  })
}
handleLogin=(values)=>{
  alert(JSON.stringify(values))
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
          <Button className="primary" onClick={this.handleClick} >Add a comment </Button>
          <Modal isOpen={this.state.isModalOpen} toggle={this.handleClick}>
            <ModalHeader toggle={this.handleClick}>Comment </ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values)=>this.handleLogin(values)}>
                <Row className="form-group">
                <Col >
                  <Label htmlFor="username">Your name </Label>
                  <Control.text model=".username" name="username"
                  className="form-control " />
                </Col>
                </Row>
                <Row className="form-group">
                <Col>
                <Label  htmlFor="feedback">Feedback </Label>
                <Control.textarea model=".feedback" name="feedback" className="form-control" />
                </Col>
                </Row>
                <ModalFooter>
                <Button type="submit" onClick={this.handleClick}color="primary">Comment </Button>
                </ModalFooter>
              </LocalForm>
              </ModalBody>
              </Modal>

          </div>
          <div className="col"> {this.props.id.description}  </div>
          
        </div>
      </div>
    )
}
}

export default CelestialDetail;
