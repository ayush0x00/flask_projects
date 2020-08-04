import React, {Component} from 'react'
import {FormGroup,FormControl,InputGroup} from 'react-bootstrap'
import { MDBBtn, MDBIcon } from "mdbreact";
import 'mdbreact/dist/css/mdb.css'
import './app.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      query:""
    }
  }
  search(){
    console.log(this.state);
  }
  render(){
    return(
      <div className="App">
        <div id="title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              value={this.state.query}
              onChange={(event)=> this.setState({query:event.target.value})}
              onKeyPress={(event)=>{
                if(event.key==="Enter")
                  this.search()
              }}
              className="input"
              placeholder="Search an artist.." />
            <MDBBtn size="md" rounded outline color="info" onClick={()=>this.search()}><MDBIcon  icon="search" className="mr-2" />Search</MDBBtn>
          </InputGroup>
        </FormGroup>
        <div className="profile">
          <div>artist picture</div>
          <div>artist name</div>
        </div>
        <div className="Gallery">Gallery</div>
      </div>
    )
  }
}

export default App;
