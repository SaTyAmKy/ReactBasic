import { useState } from 'react';
import './App.css'

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [note, setNote] = useState([]);
  function handleSubbmit() {
    if (title.trim() === "" || content.trim() === "") return;

    const newNote = { title, content, date: new Date().toLocaleString() };
    setNote([...note, newNote]);
    setTitle("");
    setContent("");



  }
  function handleDelete(index) {
  const updatedNotes = note.filter((_, i) => i !== index);
  setNote(updatedNotes);
}


  return (
    <>
      <div className="container">
        <h1>Notes App</h1>
        <div className="input-box">
          <label htmlFor="">Title Input :</label>
          <input type="text" placeholder='Note Title ...' value={title} onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="">Textarea :</label>
          <textarea placeholder='Write your notes' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button onClick={handleSubbmit}>Add</button>
      </div>


      <div className="cards-container">
        {note.length === 0 && <p> No single note added.</p>}

        {note.length > 0 && 
          
            note.map((ele, index) => (
              <div className="card" key={index}>
                <h3>{ele.title}</h3>
                <p>{ele.content}</p>
                <small>{ele.date}</small>
                <button onClick={() =>handleDelete(index)}>Delete</button>
              </div>)
        
        )}

      </div>






    </>
  )
}

export default App
