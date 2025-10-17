import {useState} from "react";
import './App.css'

function App() {
  const [isVisible,setIsVisible] = useState(false);
  const [value,setValue] = useState("");


  

  return (
    <>
    <div className="container">
      <h2>  Toggle with  User Input</h2>
      <input type="text" placeholder='Enter here' value = {value} onChange={(e) => setValue(e.target.value)} className = "box"/>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible?"Hide" : "Show"}
      </button>
      {isVisible && <p>{value}</p>}

    </div>
     
    </>
  )
}

export default App
