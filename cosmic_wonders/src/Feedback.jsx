import React, {Component} from 'react';
import {Form, FormGroup,FormFeedback, Button, Col, Label, Input} from 'reactstrap'

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
      contactType:"",
      visited:{
        firstname:false,
        lastname:false,
        email:false,
        mobile:false
      }
    }
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleOnSubmit=this.handleOnSubmit.bind(this);
    this.handleBlur=this.handleBlur.bind(this);
  }

  formValidate(firstname,lastname,email,mobile){
    const errors={
      firstname:"",
      lastname: "",
      email:"",
      mobile:""
    }
    const name=/^[a-zA-Z]{3,10}$/;
    const mob=/^[0-9]{10}$/;
    const email_reg=/([a-zA-z0-9]+)@([a-zA-z]+)\.([a-zA-Z]{2,5})/;
    if(this.state.visited.firstname && !name.test(firstname))
      errors.firstname="First name should contain at least 3 characters and at max 10 characters"
    if(this.state.visited.lastname && !name.test(lastname))
      errors.lastname="Last name should contain at least 3 characters and at max 10 characters"
    if(this.state.visited.mobile && !mob.test(mobile))
      errors.mobile="PLease enter valid mobile number"
    if(this.state.visited.email && !email_reg.test(email))
      errors.email="PLease enter a valid email address";
    return errors;
  }

  handleBlur=(field)=>(evt)=>{
    this.setState({
      visited:{...this.state.visited,[field]:true}
    })
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
    const errors=this.formValidate(this.state.firstname,this.state.lastname,this.state.email,this.state.mobile)
    return(
      <div className="container">
        <Form onSubmit={this.handleOnSubmit}>
          <FormGroup row>
            <Label htmlFor="firstname" md={2}>First name </Label>
            <Col md={{size:10}}>
              <Input type="text" id="firstname" name="firstname"
              placeholder="First name"
              valid={errors.firstname===""}
              invalid={errors.firstname!==""}
              value={this.state.firstname}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur('firstname')} />
              <FormFeedback>{errors.firstname}</FormFeedback>
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="lastname" md={2}>Last name </Label>
            <Col md={10}>
              <Input type="text" id="lastname"
              valid={errors.lastname===""}
              invalid={errors.lastname!==""}
              name="lastname" placeholder="Last name"
              value={this.state.lastname} onChange={this.handleInputChange} onBlur={this.handleBlur('lastname')} />
              <FormFeedback>{errors.lastname}</FormFeedback>
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email" md={2}>Email </Label>
            <Col md={10}>
              <Input type="email" id="email" name="email" placeholder="Email"
              onBlur={this.handleBlur('email')}
              valid={errors.email===""}
              invalid={errors.email!==""}
              value={this.state.email} onChange={this.handleInputChange}/>
              <FormFeedback>{errors.email}</FormFeedback>
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="mobile" md={2}>Mobile Number </Label>
            <Col md={10}>
              <Input type="tel" id="mobile" name="mobile" placeholder="Mobile Number"
              value={this.state.mobile}
              valid={errors.mobile===""}
              invalid={errors.mobile!==""}
              onBlur={this.handleBlur('mobile')}
              onChange={this.handleInputChange}/>
              <FormFeedback>{errors.mobile}</FormFeedback>
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
