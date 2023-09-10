// import { useState } from "react"
import React,{useState} from 'react'

function UseStateExample() {
    const [data , setData]=useState('mahesh');
  return (
    <div>
        <h3>{data}</h3>
        <button onClick={()=>setData('narute')}>click</button>
    </div>
  )
}

export default UseStateExample