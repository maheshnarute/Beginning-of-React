import React, { Component } from 'react'

class Massage extends Component {
    constructor (){
        super()
        this.state ={
            massage: "welcome visitors"

        }
    }
    changeMassage(){
        this.setState({
            // massage: "thanks for suscribe"
            massage: "thanks for subscribe" 
        })
    }
    render(){
  return (
    <div>
        <h1>{this.state.massage}</h1>
      
     <button onClick={() => this.changeMassage()}>subscribe</button> {/* Corrected 'suscribe' to 'subscribe' */}
     </div>

  )
    }
}

export default Massage