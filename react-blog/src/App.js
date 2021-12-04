
import './App.css';

function App() {
  const title='welcome to new blog';
  const likes=50;
  const person={name:'hamza'}
  return (
    <div className="App">
      <h1>{title}</h1>
      <p>{likes} is the lke</p>
       <p>{person.name} is the number</p>
    </div>
  );
}

export default App;
