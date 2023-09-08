import React, { useState } from 'react';

function GetInputBox() {
  const [data, setData] = useState('');
  const [print ,setprint]=useState('');
  function getData(event) {
    // const inputValue = event.target.value;
    setData(event.target.value);
  }
 const printvalue=()=>{
    setprint(true);
    // setprint(false)
 }

  return (
    <div>
        {
            print?
            <h2>{data}</h2>
            : null
        }
      
      <input type='text' onChange={getData} />
      <button onClick={printvalue}>print data</button>
    </div>
  );
}

export default GetInputBox;
