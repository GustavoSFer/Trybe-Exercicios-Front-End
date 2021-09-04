import './App.css';
import pokemons from './data';
import Pokemon from './Components/Pokemon';



function App() {
  return (
    <div className="App">
     { pokemons.map((item) => <Pokemon pokemon={ item } />)}
    </div>
  );
}

export default App;
