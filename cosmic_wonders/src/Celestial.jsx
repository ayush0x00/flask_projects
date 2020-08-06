import React, {Component} from 'react';
import {wonders} from './shared/data.js'
import { CardDeck } from 'reactstrap';
import LoneWonder from './Card'

class Celestial extends Component{
  constructor(props){
    super(props);
    this.state={
      wonders:wonders,
      clicked:null
    }
  }

  onClick(id){
    this.setState({clicked:id})
  }

  render(){
    const displayWonder=this.state.wonders.map(wonder=>{
      return(
        <LoneWonder key={wonder.id} info={wonder} onClickBtn={(id)=>this.onClick(id)} />
      )})
      return(

        <CardDeck>
          {displayWonder}
        </CardDeck>

      )
    }
  }
export default Celestial;
