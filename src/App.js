import React from 'react';

// components
import Parent1 from './components/Parent1/Parent1';
import Parent2 from './components/Parent2/Parent2';
import Child1P1 from './components/Parent1/Child1P1/Child1P1';
import Child1P2 from './components/Parent2/Child1P2/Child1P2';
import Sub1Child1P1 from './components/Parent1/Child1P1/SubChild1P1/Sub1Child1P1';
import Sub2Child1P1 from './components/Parent1/Child1P1/SubChild1P1/Sub2Child1P1';

// state
import { useStateValue } from './state/StateProvider';

function App() {
  const [{ user, age }] = useStateValue();

  return (
    <main>
      <div className="outputSection">
        <h1 style={{}}>Output</h1>
        <p><strong>User:  </strong>{user}</p>
        <p><strong>Age:  </strong>{age}</p>
      </div>

      <div className="inputSection">
        <h1 className="title">Context Api</h1><br />
        <Parent1 /><br />
        <Parent2 /><br />
        <Child1P1 /><br />
        <Child1P2 /><br />
        <Sub1Child1P1 /><br />
        <Sub2Child1P1 />
      </div>
    </main>
  );
}

export default App;
