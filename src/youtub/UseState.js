import React from 'react'
import { useState } from 'react'

function UseState() {
const [data ,setdata]=useState("mahesh")
// const [data ,setdata]=useState(0)

const onchange=()=>{
    // setdata(data+1)
    setdata('narute')

}
  return (
    <div>
        <h3>{data}</h3>
        <button onClick={onchange}>click</button>
    </div>
  )
}

export default UseState