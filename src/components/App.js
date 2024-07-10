
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[name,setName] = useState('');
  return (
    <div>
        <h1>Enter your name :</h1>
      <input type='text' value={name} onChange={(e)=>setName('Hello' + e.target.value + '!')}/>
       <p> {name}</p>
    </div>
  )
}

export default App;
