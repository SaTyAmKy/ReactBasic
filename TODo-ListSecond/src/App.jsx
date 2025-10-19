import {useState} from "react";
import './App.css'

function App() {
  const [data, setData] = useState("");
  const [todo, setTodo] = useState([]);



  function handleSubmit() {
    if (data.trim() !== "") {
      setTodo([...todo, data]);
      setData("");
    }

  }
  function handleDelete(index){
    const newTodo =[...todo];
    newTodo.splice(index,1);
    setTodo(newTodo);
  }

  return (
    <>
      <h1>Todo-List</h1>
      <div className="container">
        <div className="input-data">
          <input type="text" placeholder='Enter todos ...' value={data} onChange={(e) => setData(e.target.value)} />
          <button onClick={handleSubmit}>Add</button>

        </div>
        <div className="data">
          {todo.length === 0 && <p>No to yet present</p>}
          {todo.length > 0 && (
            <ul>
              {todo.map((item,index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
              ))}
            </ul>
          )}

        </div>
      </div>


    </>
  )
}

export default App
