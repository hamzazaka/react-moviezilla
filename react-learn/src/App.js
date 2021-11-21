import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Employee from './components/Employee';

function App() {
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
     {data.map(employee=>{
       const {name,age}=employee
       return (
        <Employee name={name} age={age}/>
       )
     })}
    </div>
  );
}

export default App;
