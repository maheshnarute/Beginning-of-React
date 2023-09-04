import React from 'react'

const  FunctionClick1=()=> {
    const handlechange=()=>{
        alert("hello")
        console.log("handlechange")
    }
  return (
    <div><button onClick={handlechange()}>  click</button></div>
  )
}

export default FunctionClick1