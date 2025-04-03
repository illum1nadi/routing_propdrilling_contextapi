import React, { useContext, useState, createContext } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/count';


function App() {

  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
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
  const count = useRecoilValue(countAtom)
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount((count) => (count + 1))}>Increase</button>
      <button onClick={() => setCount((count) => (count - 1))}>Decrease</button>
    </div>
  );
}

export default App;
