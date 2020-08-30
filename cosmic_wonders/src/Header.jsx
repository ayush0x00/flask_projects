import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav , NavItem, Jumbotron,Modal, ModalBody, ModalHeader,
Form, FormGroup, Input, Label,Button} from 'reactstrap';
import {NavLink} from 'react-router-dom'
class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      isModalOpen:false
    }
    this.toggleModal=this.toggleModal.bind(this);
    this.handleLogin=this.handleLogin.bind(this)
  }

  toggleModal(){
    this.setState({isModalOpen:!this.state.isModalOpen})
  }

  handleLogin(event){
    this.toggleModal();
    alert(this.username.value)
    event.preventDefault()
  }

  render(){
    return(
      <>
        <Navbar color="primary" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" to="/">Cosmic Wonders</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink style={{color:"black"}} className="nav-link" to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" style={{color:"black"}} to="/celestial">Celestial</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" style={{color:"black"}} to="/tellus">Tell Us About You</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" style={{color:"black"}} to="/feedback">Feedback</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline onClick={this.toggleModal}> SignIn </Button>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Cosmic Wonders</h1>
                <p>This page acknowledges you to the cosmic wonders present in out universe</p>
              </div>
            </div>
            </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.handleLogin}>
          <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" name="username" innerRef={(input)=>this.username=input}/>
          <Label htmlFor="password">password</Label>
          <Input type="password" id="password" name="password" innerRef={input=>this.password=input}/>
          </FormGroup>
          <FormGroup check>
          <Input type="checkbox" name="remember" innerRef={input=>this.remember=input}/>
            <Label check htmlFor="remember"> Remember me
            </Label>
          </FormGroup>
          <FormGroup>
            <Button type="submit" value="submit" color="primary" onClick={this.handleLogin}>Login </Button>
            </FormGroup>
            </Form>
          </ModalBody>
          </Modal>
      </>
    )
  }
}
export default Header
