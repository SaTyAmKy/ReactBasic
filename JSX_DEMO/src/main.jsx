import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './components/Welcome.jsx';
// const name = "Satyam";

// const H1 =
// (<div>
// <h1>Welcome {name}</h1>
// <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, expedita!</p>
// <input type="text" />
// </div>)

function Hello() {
  console.log("Hello Function Called");

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {H1} */}
    <>
    <button onClick={Hello}>Click Me</button>
    <button onClick={() => {
      console.log("Hello Arrow Function Called");
    }}>Click Me</button>
 
    <Welcome />
    </>
  </StrictMode>


   
);
