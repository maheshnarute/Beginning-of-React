// import { useState } from "react"
import React, {useEffect, useState} from 'react'

function UseEffectExample(props) {
    const [count ,setCount]=useState(10)
    const [data ,setData]=useState(100)
    console.log(count)
    const incrementCount = () => {
        console.log(count)
        console.log('mahesh')
        setCount(count + 1); 
      };
      useEffect(()=>{
        // alert('print')
        console.log("narute ")
        console.log(data)
      },[data])
  return (
    <div>
       <h3>count: {count}</h3>
       <h3>data : {data}</h3>
       <button onClick={incrementCount}>count</button>
      <button onClick={() => setData(data + 1)}>data</button>
    </div>
  )
}

export default UseEffectExample