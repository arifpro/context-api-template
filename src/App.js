import React, { useState } from 'react';

// components
import Parent1 from './components/Parent1/Parent1';
import Parent2 from './components/Parent2/Parent2';

// state
import { useStateValue } from './state/StateProvider';


function App() {
  // const [user, setUser] = useState(null);
  const [{ user, age }, dispatch] = useStateValue();

  return (
    <div className="app">
      <div className="outputSection">
        <h1 style={{}}>Output</h1>
        <p>User: {user}</p>
        <p>Age: {age}</p>
      </div>

      <div className="inputSection">
        <h1 className="title">Context Api</h1>
        <br />
        <Parent1 />
        <br />
        <Parent2 />
      </div>
    </div>
  );
}

export default App;
