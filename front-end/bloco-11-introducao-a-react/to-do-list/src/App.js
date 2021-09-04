import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const arrayCompromisso = ['HTML', 'CSS', 'JavaScript', 'Angular', 'React']

function App() {
  return (
    <div className="App">
     {arrayCompromisso.map((item) => <p>{Task(item)}</p>)}
    </div>
  );
}

export default App;
