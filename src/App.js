import React from 'react';
import { useState } from 'react'
import Component1 from './componenets/Component1';
import Component2 from './componenets/Component2';


function App() {
  let [headline, setHeadline] = useState("Hej")
  return (
    <div>
    <h1>{ headline }</h1>
    <Component1 setHeadline={setHeadline}/>
    <Component2 setHeadline={setHeadline}/>
    </div>
  );
}

export default App;
