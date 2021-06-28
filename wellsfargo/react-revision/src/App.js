import { useState } from "react";
function App() {
  let myTodos = [
    { id: 1, item: "clean" },
    { id: 2, item: "cook" },
    { id: 3, item: "study" },
    { id: 4, item: "exercise" },
  ];
  const [todo, setTodo] = useState(myTodos)
  const [text, setText] = useState('')
  const [toggle, setToggle] = useState(true)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setTodo(
      [...todo, {
        id: Math.floor(Math.random()*100),
        item: text
      }]
    )
    setText('')
  }
  const handleDelete = (id) => {
    setTodo(todo.filter(todo => todo.id !== id))
  }

  const handleUpdate = (todo) => {
    setText(todo.item)
    handleDelete(todo.id)
  }
  return (
    <div className="App">
      <button onClick = {() => setToggle(!toggle)}>Toggle FriendList</button>

      {toggle &&
      <>
      <h1>My Todo List</h1>
      <ul>
        {todo.map(todo => (
            <li key={todo.id}>
              {todo.item}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              <button onClick={() => handleUpdate(todo)}>Update</button>
            </li>
        ))}
      </ul>
      <form onSubmit={handleOnSubmit}>
        <input type='text' onChange={(e) => setText(e.target.value)} value={text}></input>
        <input type='submit'></input>
      </form>
      </>
      }
      
    </div>
  );
}

export default App;
