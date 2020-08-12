import React, {Component} from 'react';
import {wonders} from './shared/data.js';
import {BrowserRouter} from 'react-router-dom'
import Celestial from './Celestial'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import {Switch, Route, Redirect} from 'react-router-dom'

class App extends Component{
 constructor(props){
   super(props);
   this.state={
     wonders:wonders
   }
 }
render(){
  return(
    <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route exact path="/celestial" component={()=><Celestial wonders={this.state.wonders} />} />
        <Redirect to="/home"/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}
}

export default App;
