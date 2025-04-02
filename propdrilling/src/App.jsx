import React, { useContext, useState, createContext } from 'react';

// Create the context with an initial value (optional)
const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    // Wrap the components that need access to count and setCount
    <CountContext.Provider value={{ count, setCount }}>
      <Count />
    </CountContext.Provider>
  );
}

function Count() {
  // Get count from the context
  const { count } = useContext(CountContext);
  return (
    <div>
      {count}
      <Buttons />
    </div>
  );
}

function Buttons() {
  // Get count and setCount from the context
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
