import './App.css';
import React from 'react';
import Inputs from './Components/Inputs'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
    }
    this.handleSetState = this.handleSetState.bind(this);
  }

  handleSetState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value.toUpperCase(),
    })
  }

  render() {
    return (
      <div className="App">
        <fieldset>
          <legend>Dados pessoais:</legend>
          <Inputs type="text" name="name" onChange={this.handleSetState} value={this.state.name}>Nome: </Inputs>

          <Inputs type="email" name="email" onChange={this.handleSetState} value={this.state.email}>Email: </Inputs>


        </fieldset>
      
      </div>
    );
  }
}

export default App;
