import React, { Component } from 'react'

class ConditionRedering extends Component {
    constructor(props){
        super(props)
            this.state={
                isLogin:false
                // isLogin:true

            }
        
    }
    render(){
        return(
        // if(this.state.isLogin){
        //     return (
        //         <div>
        //     <div>wellcom</div>

        //         </div>
        //       )
        // }
        // else{
        //     return (
        //         <div>
        //     <div>tata</div>

        //         </div>
        //       )
        // }
        // this.state.isLogin ? <div> welocom</div>: <div>tata</div>
        this.state.isLogin && <div> wellcom</div>
        )
  
}}

export default ConditionRedering