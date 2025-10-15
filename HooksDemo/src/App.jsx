import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  //  count  ====>>> current state value
  //  setCount ====>>> it is a function privided by react  whenever you call setCount(newValue),React schedules and updates and re-renders your componenet with the new state value.
  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => {
        setCount((count + 1));
        console.log(count);

      }}>+</button>
    </>
  )
}

export default App
