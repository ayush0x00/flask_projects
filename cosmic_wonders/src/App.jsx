import React, {Component} from 'react';
import {wonders} from './shared/data.js';
import Celestial from './Celestial'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      wonders:wonders
    }
  }
 render(){
   return(
     <div className="container">
       <Celestial wonders={this.state.wonders}/>
     </div>
   )
 }
}

export default App;
