//onclick hide and show toggel in react 
import React,{useState} from 'react'

function HideShow() {
    const [hide, sethide]=useState(true)
    const action=()=>{
        sethide (!hide);
    }
    const action1=()=>{
        sethide (true);
    }
  return (
    <div>
        
        {
            hide ?<h1>hello</h1>:null
        }
        {/* <button onClick={action}>hide</button>
        <button onClick={action1}>show</button> */}
         <button onClick={action}>toggel</button>

    </div>
  )
}

export default HideShow