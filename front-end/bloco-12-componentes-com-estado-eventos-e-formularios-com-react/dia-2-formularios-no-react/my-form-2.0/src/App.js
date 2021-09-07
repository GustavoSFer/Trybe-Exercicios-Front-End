import './App.css';
import React from 'react';
import Inputs from './Components/Inputs'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      CPF: 0,
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
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

          <Inputs type="number" name="CPF" onChange={this.handleSetState} value={this.state.CPF}>CPF: </Inputs>

          <Inputs type="text" name="endereco" onChange={this.handleSetState} value={this.state.endereco}>Endereço: </Inputs>

          <Inputs type="text" name="cidade" onChange={this.handleSetState} value={this.state.cidade}>Cidade: </Inputs>

          <Inputs type="text" name="estado" onChange={this.handleSetState} value={this.state.estado}>Estado: </Inputs>

          <Inputs type="text" name="tipo" onChange={this.handleSetState} value={this.state.tipo}>Tipo: </Inputs>

        </fieldset>
      
      </div>
    );
  }
}

export default App;
