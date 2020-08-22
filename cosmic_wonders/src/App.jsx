import React, {Component} from 'react';
import {wonders} from './shared/data.js';
import {BrowserRouter} from 'react-router-dom'
import Celestial from './Celestial'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import {data} from "./shared/carousel_data.js"
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Switch, Redirect} from 'react-router-dom'

class App extends Component{
 constructor(props){
   super(props);
   this.state={
     wonders:wonders,
     data:data
   }
 }
render(){
  return(
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/home" component={()=><Home data={this.state.data}/>}/>
          <Route exact path="/celestial" component={()=><Celestial wonders={this.state.wonders} />} />
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
  </Router>
  )
}
}

export default App;
