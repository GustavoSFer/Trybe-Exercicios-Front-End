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
     <p>{Task('Gustavo')}</p>
    </div>
  );
}

export default App;
