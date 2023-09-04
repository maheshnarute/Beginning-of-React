import React, { Component } from 'react'
import ChildeComponant from './ChildeComponant';

class ParrentComponant extends Component {
    constructor(props){
        super(props);
        this.state={
            parentName:"mahesh"
        }
        this.greetParent1= this.greetParent1.bind(this)
    }
    greetParent1(child){
        alert(`Hello ${this.state.parentName} from ${child}`)
    }
    render(){
  return (
    <div>
        {/* <button onClick={this.greetParent1}>click</button> */}
        <ChildeComponant greetHandler={this.greetParent1}/>
        </div>
  )
}
}

export default ParrentComponant