import ShowFruits from "./components/ShowFruits";
import AddFruit from "./components/AddFruit";
import {useState} from "react";
import './App.css'

function App() {
  const [fruits, setFruits] = useState(['banana', 'apple', 'orange']);
   
  const saveFruits =(item) => {
    setFruits((items) => [...items,item]);
  }

  const deleteFruit = (fruits) => {
    // setFruits((items) => items.filter(items) => items !== fruit);
   
  }
 

  return (
    <>
    <h2>Fruits</h2>
    <AddFruit saveFruits={saveFruits} />
    <ShowFruits fruits={fruits}/>
     
    </>
  )
}

export default App
