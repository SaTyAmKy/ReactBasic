import Welcome from './components/Welcome'
import './App.css'

function App() {
  function whileClick(name){
    console.log(`Good Morning ${name}`);
  }
  
  return (
    <>
    <Welcome isLogined={false}></Welcome>
      <button onClick={()=>{whileClick("Satyam")}}>Click</button>
      
    </>
  )
}

export default App
