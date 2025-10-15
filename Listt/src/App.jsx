
import './App.css'

function App() {
  const fruits = ["apple", "banana", "grapes", "mango"];
  // const s = {color:"red"};
  return (

    <>
      <ul className="b">
      {
        fruits.map((item,index)=> (
        <li key={index} style={{color:"green",backgroundColor:"gray",marginBottom:"50px"}}>{item}</li>))
      }
      </ul>
    </>
  )
}

export default App
