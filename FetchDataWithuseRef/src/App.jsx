import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const ref = useRef([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then((data) => {
        ref.current = data.users;
        console.log(ref.current);

      })
      .catch((err) => console.log(err));
      
  },[]);

  const showData = () => {
    setVisible(true);
  }

  return (
    <>
    <h2>FETVHING DATA WITH useState,useEffect And useRef.</h2>
     <button onClick={showData} >Show Data</button>
     {visible && (
      <ul>
        {ref.current.map((item) => (
          <li key={item.id}>{item.firstName}  </li>
          
        ))}
      </ul>
    )}


    </>
  )
}

export default App
