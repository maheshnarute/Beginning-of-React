import React from 'react';
import './App.css';
import Count from './componant/Count';
import Greate from './componant/Greate';
import Massage from './componant/Massage';
import FunctionClick1 from './componant/FunctionClick1';
import EventBind from './componant/EventBind';
import ParrentComponant from './componant/ParrentComponant';
import ConditionRedering from './componant/ConditionRedering';
import ListName from './ArrayComponant/ListName';

function App() {
  return (
    <div className="App">
{/* <ParrentComponant/>       */}
{/* <ConditionRedering/> */}
<ListName/>
      {/* <EventBind/> */}
      {/* <FunctionClick1 /> */}
      {/* <Greate name="mahesh" >
        <p> this child of props </p>
      </Greate>
      <Greate name="mangesh" />
      <Greate name="sid" /> */}
      {/* <Massage /> */}
      {/* <Count /> */}
      

    </div>
  );
}

export default App;
