import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom'
class Header extends Component{
  render(){
    return(
      <>
        <Navbar color="primary" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">Cosmic Wonders</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/celestial">Celestial</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/aboutus">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/contactus">Contact us</NavLink>
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
