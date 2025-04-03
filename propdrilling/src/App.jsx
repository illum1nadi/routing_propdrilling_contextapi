import React, { useContext, useState, createContext } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';


function App() {
  const [ct, setCt] = useState(0);

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
      <DisplayCt ct = {ct} setCt = {setCt}></DisplayCt>
    </div>

  );
}


function DisplayCt({ct, setCt}) {
  return(
    <button onClick={() => setCt((ct) => (ct + 1))}>{ct}</button>
  ) 
}

function Count() {
  console.log("count re rendered.")
  return (
    <div>
      <CountRenderer></CountRenderer>
      <Buttons />
      <IsEven></IsEven>
    </div>
  );
}

function IsEven() {
  const count = useRecoilValue(evenSelector);
  return (
    <>
      {count ? "It is even" : null}
    </>
  )
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
