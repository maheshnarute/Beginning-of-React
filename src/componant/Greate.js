import React from 'react'

const Greate=(props)=> {
  // const Greate=(name)=>{ destructring the props 
// const Greate=(name)=>props { sending the all data to the props as it is 

    console.log(props)
  return (

    <div>
        <h1> hello {props.name}  </h1>
        {/* <h1> hello {name}  </h1> destructring the props  it will also usefull for it */}

        {props.children}
    </div>
  )
}

export default Greate