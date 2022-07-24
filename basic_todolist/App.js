
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo ===""){
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);  
    //이해하면 쉬움 const food = [1,2,3,4]에다가 6이라는 element를 추가하고 싶으면 => [6, ...food]의 형식으로 채울수 있다.
    setToDo("");
  }
  return (
    <div> 
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          value={toDo}
          onChange={onChange} 
          type="text" 
          placeholder="Write your to do..."
        />
        <button >Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index)=> (
        <li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}
 
export default App;
