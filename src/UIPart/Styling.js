import React from 'react'
import  "./Style.css";
function Styling(props) {

    const className=props.display ? 'display': ''
    const classFont=props.style ? 'font-x':''
  return (
    <div>
        <h3 className={`${className} font-xl`}>mahesh</h3>
    </div>
  )
}

export default Styling