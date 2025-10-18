import { useState } from 'react'
import Counter from './Components/Counter';
import Toggle from './Components/Toggle';

import './App.css'

function App() {
  
  const [value,setValue] = useState(" ");

  return (
    <>
      <Counter value={value} setValue={setValue}/>
      <Toggle value={value}/>
    </>
  )
}

export default App;
