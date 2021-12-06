
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const title='welcome to new blog';
  const likes=50;
  const person={name:'hamza'}
  return (
    <div className="App">
       <Navbar/>
     <div className="content">
       <Home/>
     </div>
    </div>
  );
}

export default App;
