import {useState} from 'react'

function App() {
  const [text, setText] = useState('')
  const handleOnChange = (event) =>{
    setText(event.target.value)
    console.log(text)
  }
  console.log(text)
  return (
    <div className="App">
      <p>Testing</p>

      <label htmlFor="in">In</label>
      <input type="textbox" id="in" onChange={handleOnChange} />

      <label htmlFor="out">Out</label>
      <input type="textbox" id="out" value={text} />
    </div>
  );
}


export default App;
