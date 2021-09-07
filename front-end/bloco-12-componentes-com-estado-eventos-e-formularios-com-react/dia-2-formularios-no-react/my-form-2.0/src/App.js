import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
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
          <label htmlFor="name">
            Name:
            <input type="text" id="name" name="name" onChange={this.handleSetState} value={this.state.name} />
          </label>
        </fieldset>
      
      </div>
    );
  }
}

export default App;
