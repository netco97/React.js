
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  console.log("i run all the time");
  useEffect(() => {
    console.log("i run only once.");
  }, []);
  useEffect(()=>{
    {
      console.log("i run when 'keyword' changes.");
    }
  },[keyword]); //[]안에 아무것도 적지않으면 딱1번만 발생하지만 []안에 keyword를 입력하면 keword가 변화할때마다 코드를 실행하라고 React.js에게 알려줌.
  useEffect(()=>{
    console.log("i run when 'counter' changes.")
  },[counter]);
  useEffect(()=>{
    console.log("i run when 'counter'||'keyword' changes")
  },[counter,keyword]);
  return (
    <div>
      <input value={keyword}
      onChange ={onChange}
      type="text" 
      placeholder="Search here.." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;