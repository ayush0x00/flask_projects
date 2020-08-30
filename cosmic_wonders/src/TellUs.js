import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem, Row ,Col, Button,Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';

const validEmail=(val)=>/([a-zA-z0-9]+)@([a-zA-z]+)\.([a-zA-Z]{2,5})/.test(val)
const validNumber=(val)=>!isNaN(Number(val));

class TellUs extends Component{
  constructor(props){
    super(props);

    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(values){
    alert(JSON.stringify(values))
  }
  render(){
    return(
      <div className="container">
      <Breadcrumb>
        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/celestial">Celestial</Link></BreadcrumbItem>
        <BreadcrumbItem active>Happy To Meet YOu</BreadcrumbItem>
      </Breadcrumb>
        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
          <Row className="form-group">
            <Label htmlFor="firstname" md={2}>First name </Label>
            <Col md={{size:10}}>
              <Control.text model=".firstname" id="firstname" name="firstname"
              placeholder="First name"
              className="form-control"
               />
              </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="lastname" md={2}>Last name </Label>
            <Col md={10}>
              <Control.text model=".lastname" id="lastname"
              className="form-control"
              name="lastname" placeholder="Last name"
               />

              </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="email" md={2}>Email </Label>
            <Col md={10}>
              <Control.text className="form-control" model=".email" id="email" name="email" placeholder="Email"
              validators={{validEmail}}
               />
               <Errors className="text-danger" model=".email"
               show="touched"
               messages={{validEmail:"Please enter valid email adddress"}}
               />
              </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="mobile" md={2}>Mobile Number </Label>
            <Col md={10}>
              <Control.text model=".tel" id="mobile" name="mobile" placeholder="Mobile Number"
              className="form-control"
              validators={{validNumber}}
              />
              <Errors className="text-danger" model=".tel"
              show="touched"
              messages={{validNumber:"Please enter valid number"}}
              />
              </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="message" md={2}>Your feedback </Label>
            <Col md={8}>
              <Control.textarea className="form-control" model=".message" id="message" name="message" row="10"
              />
              </Col>
          </Row>
          <Row className="form-group">
            <Col md={{size:3,offset:2}}>
              <div className="form-check">
                <Label check>
                  <Control.checkbox model=".agree" name="agree" className="form-check-input" />{''}
                  <strong> May we contact you</strong>
                </Label>
              </div>
            </Col>
            <Col md={{size:3,offset:0}}>
            <Control.select className="form-control" model=".contactType" name="contactType" >
            <option> Via mobile </option>
            <option>Via email </option>
            </Control.select>
            </Col>
          </Row>
          <Row className="form-group">
          <Col md={{size:3,offset:4}}>
          <Button type="submit" color="primary" style={{margin:"10px"}}> Send Feedback </Button>
          </Col>
          </Row>
        </LocalForm>
        </div>
    )
  }
}

export default TellUs;
