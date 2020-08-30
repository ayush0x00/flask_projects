import React, {Component} from 'react';
import Celestial from './Celestial'
import CelestialDetail from './CelestialDetail'
import Home from './Home'
import Feedback from './Feedback'
import Header from './Header'
import Footer from './Footer'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Switch, Redirect,withRouter} from 'react-router-dom'
import TellUs from './TellUs'
import {connect} from 'react-redux';



const mapStateToProps=state=>{
  return{
  wonders:state.wonders,
  data:state.data
}
}

class App extends Component{
render(){

  const CelestialwithId=({match})=>{
    return(
    <CelestialDetail id={this.props.wonders.filter((item)=> item.id===parseInt(match.params.id,10))[0]} />
  )
  }

  return(

    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/home" component={()=><Home data={this.props.data}/>}/>
          <Route exact path="/celestial" component={()=><Celestial wonders={this.props.wonders} />} />
          <Route path="/celestial/:id" component={CelestialwithId} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/tellus" component={TellUs} />
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
  </Router>

  )
}
}

export default withRouter(connect(mapStateToProps)(App));
