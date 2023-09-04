import React from 'react'

const ChildeComponant=(props)=> {
  return (
    <div>
        <button onClick={()=>props.greetHandler('baramati')}> click</button>
    </div>
  )
}

export default ChildeComponant