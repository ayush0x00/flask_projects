import React, {Component} from 'react';
import {wonders} from './shared/data.js';
import Celestial from './Celestial'
import CelestialDetail from './CelestialDetail'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Feedback from './Feedback'
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

  const CelestialwithId=({match})=>{
    console.log(match);
    return(
    <CelestialDetail id={this.state.wonders.filter((item)=> item.id===parseInt(match.params.id,10))[0]} />
  )
  }

  return(
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/home" component={()=><Home data={this.state.data}/>}/>
          <Route exact path="/celestial" component={()=><Celestial wonders={this.state.wonders} />} />
          <Route path="/celestial/:id" component={CelestialwithId} />
          <Route path="/feedback" component={Feedback} />
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
  </Router>
  )
}
}

export default App;
