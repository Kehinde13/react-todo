import React, { useState } from 'react';
import './style.css';

export default function App() {
 const [todos, setTodos] = useState([])
 const [task, setTask] = useState("")

 const handleChange = (e) => {
  setTask(e.target.value)
  /* console.log(task) */
}


const handleSubmit = (event) => {
  event.preventDefault()
  setTodos([...todos, {name: task, isCompleted: false}])
  setTask("")
}


  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="write a Todo"
            value={task}
            onChange={handleChange}
          />

          <button>
            Add Todo
          </button>
        </form>
       
       <div>
          <h1>Todos</h1>
          {
            todos.map((todo) => (
              <div key={crypto.randomUUID()}>
                {todo.name}
              </div>
            ))
          }
       </div>
    </div>
  );
}
