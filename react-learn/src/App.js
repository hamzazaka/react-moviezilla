import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <h1>Company Directory</h1>
     <Employee name='hamza zaka' age={44}/>
     <Employee name='hamza' age={14}/>
     <Employee name='noman' age={24}/>
     <Employee name='arthor' age={54}/>
    </div>
  );
}

export default App;
