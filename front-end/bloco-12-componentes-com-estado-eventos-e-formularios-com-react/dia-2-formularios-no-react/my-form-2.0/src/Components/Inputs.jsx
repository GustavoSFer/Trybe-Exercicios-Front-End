import React from 'react';

class Inputs extends React.Component {
  render() {
    const { type, name, onChange, value } = this.props;

    return( 
    <label htmlFor={name}>
      {this.props.children}
      <input type={type} name={name} id={name} onChange={onChange} value={value} />
    </label>);
  }
}

export default Inputs;