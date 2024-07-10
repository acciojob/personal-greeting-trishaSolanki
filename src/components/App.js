
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[name,setName] = useState('');
  return (
    <div>
        <label>Enter your name :</label>
      <input type='text' value={name} onChange={(e)=>setName('Hello' + e.target.value + '!')}/>
       <p> {name}</p>
    </div>
  )
}

export default App;
