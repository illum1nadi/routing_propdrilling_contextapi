import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count count={count} />
      
    </>
  )
}

//setCount was unecessary for count but buttons needed it.
function Count({count, setCount}) {
  return (
    <div>
      {count}
      <Buttons count = {count} setCount={setCount} />
    </div>
  )
}

function Buttons({count, setCount}) {
  return (
    <div>
      <button onClick={() => {

      }}>Increase</button>

      <button onClick={() => {
        
      }}>Decrease</button>
    </div>
  )
}

export default App
