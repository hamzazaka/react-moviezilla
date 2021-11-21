import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  const data=[
    {
      name:"hamza",
      age:'21'
    },
    {
      name:"zaka",
      age:'12'
    },
    {
      name:"arthor",
      age:'33'
    },
    {
      name:"skill",
      age:'231'
    },
    {
      name:"anthony",
      age:'45'
    },
    {
      name:"lake",
      age:'54'
    },
  ]
  return (
    <div className="App">
      <h1>Company Directory</h1>
     {data.map((employee,idx)=>{
      //  const {name,age}=employee
       return (
        <Employee key={idx} {...employee}/>
       )
     })}
    </div>
  );
}

export default App;
