import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav , NavItem, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom'
class Header extends Component{
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
                <NavLink className="nav-link" style={{color:"black"}} to="/aboutus">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" style={{color:"black"}} to="/feedback">Feedback</NavLink>
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
      </>
    )
  }
}
export default Header
