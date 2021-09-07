import React from 'react';

class TextArea extends React.Component {
  render() {
    const { type, name, onChange, value } = this.props;

    return( 
    <label htmlFor={name}>
      {this.props.children}
      <textarea type={type} name={name} id={name} onChange={onChange} value={value} />
    </label>);
  }
}

export default TextArea;