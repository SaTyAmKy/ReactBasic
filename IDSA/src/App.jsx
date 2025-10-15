import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const handleOnCountChange = (e) => {
    setCount(e.target.value);
    
  }

  const handleOnInputChange = (e) => {
    setInputValue(e.target.value);
    
  }

  return (
    <>
    <div className='container'>
      <input type="number" placeholder='Enter the numbers' onChange={handleOnCountChange} value={count} className='box'/>
    <input type="number" placeholder='Enter the value' onChange={handleOnInputChange} value={inputValue} className='box' />

      <button onClick={() => {
        setCount(Number(count + 1));
      }} className='box'>Increment</button>

      <button onClick={() => {
        setCount(Number(count - 1));
      }} className='box'>Decrement</button>

      <button onClick={() => {
        setCount(Number(count) + Number(inputValue));
      }} className='box'>Addition</button>
      <button onClick={() => {
        setCount(Number(count) - Number(inputValue));
      }} className='box'>Substraction</button>
      </div>



    </>
  )
}

export default App
