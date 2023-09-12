// import { useState } from "react"
import React,{useState} from 'react'

function Form() {
    const[name ,setName]=useState('');
    const[check,setCheck]=useState(false);
    const[interest, setInterest]=useState('');
    const getFormData=(e)=>{
        console.log(name, check, interest)
        console.warn(name, check, interest)

        e.preventDefault()
    }
  return (
    <div> 
        <h2>sending data to backend</h2>
        <form onSubmit={getFormData}>
            <input type='text' onChange={(e)=>setName(e.target.value)}/> <br />
            <select onChange={(e)=>setCheck(e.target.value)}>
                <option>select option</option>
                <option>marval</option>
                <option>Dc</option>
            </select> <br />
            <input type='checkbox' onChange={(e)=>setInterest(e.target.checked)} />
            <br />
            

            <button type='submit'> submit</button>
        </form>
    </div>
  )
}

export default Form