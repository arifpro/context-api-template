import React, { useState } from 'react';

// components
import Parent1 from './components/Parent1/Parent1';

// state
import { useStateValue } from './state/StateProvider';


function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    <section>
      <h1>Context Api</h1>
      <p>User: {user ? user : 'no user'}</p>
      <Parent1 />
    </section>
  );
}

export default App;
