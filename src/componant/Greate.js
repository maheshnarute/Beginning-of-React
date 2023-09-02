import React from 'react'

const Greate=(props)=> {
    console.log(props)
  return (

    <div>
        <h1> hello {props.name}  </h1>
        {props.children}
    </div>
  )
}

export default Greate