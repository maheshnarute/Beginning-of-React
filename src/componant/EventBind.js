import { render } from '@testing-library/react'
import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props){
        super(props);
       this.state={
        massage:'hello'
       }
       this.onChange=this.onChange.bind(this)
    }
    onChange=()=>{
      this.setState ({
        massage:'welcome'
      })
        console.log(this)
       }
    render(){
  return (
    <div>
      <div>{this.state.massage}</div>
      {/* <button onClick={this.onChange.bind(this)}> click </button> */}
       {/* <button onClick={ ()=>this.onChange()}>click</button> */}
       <button onClick={this.onChange}>click</button>


      </div>
  )
}}

export default EventBind