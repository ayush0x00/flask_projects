import React, {Component} from 'react';
import {Form, FormGroup, Button, Col, Label, Input} from 'reactstrap'

class Feedback extends Component{
  constructor(props){
    super(props);
    this.state={
      firstname:"",
      lastname: "",
      email:"",
      agree:false,
      mobile:"",
      message:"",
      contactType:""
    }
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleOnSubmit=this.handleOnSubmit.bind(this);
  }

  handleInputChange(event){
    event.persist()
    console.log(event);
    const target=event.target;
    const value=target==='checkbox' ? target.checked : target.value;
    const name= target.name;
    this.setState({[name]:value})
  }

  handleOnSubmit(event){
    event.preventDefault();
  }

  render(){
    return(
      <div className="container">
        <Form onSubmit={this.handleOnSubmit}>
          <FormGroup row>
            <Label htmlFor="firstname" md={2}>First name </Label>
            <Col md={{size:10}}>
              <Input type="text" id="firstname" name="firstname" placeholder="First name"
              value={this.state.firstname}
              onChange={this.handleInputChange} />
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="lastname" md={2}>Last name </Label>
            <Col md={10}>
              <Input type="text" id="lastname" name="lastname" placeholder="Last name"
              value={this.state.lastname} onChange={this.handleInputChange} />
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email" md={2}>Email </Label>
            <Col md={10}>
              <Input type="email" id="email" name="email" placeholder="Email"
              value={this.state.email} onChange={this.handleInputChange}/>
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="mobile" md={2}>Mobile Number </Label>
            <Col md={10}>
              <Input type="tel" id="mobile" name="mobile" placeholder="Mobile Number"
              value={this.state.mobile} onChange={this.handleInputChange}/>
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="message" md={2}>Your feedback </Label>
            <Col md={8}>
              <Input type="textarea" id="message" name="message" row="10"
              value={this.state.message} onChange={this.handleInputChange}/>
              </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{size:3,offset:2}}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange}/>{''}
                  <strong> May we contact you</strong>
                </Label>
              </FormGroup>
            </Col>
            <Col md={{size:3,offset:0}}>
            <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
            <option> Via mobile </option>
            <option>Via email </option>
            </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
          <Col md={{size:3,offset:4}}>
          <Button type="submit" color="primary" style={{margin:"10px"}}> Send Feedback </Button>
          </Col>
          </FormGroup>
        </Form>
        </div>
    )
  }
}

export default Feedback;
