import React, { useContext, useState, createContext } from 'react';

const CountContext = createContext(0);

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Count />
    </CountContext.Provider>
  );
}

function Count() {
  console.log("count re rendered.")
  return (
    <div>
      <CountRenderer></CountRenderer>
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons() {

  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
