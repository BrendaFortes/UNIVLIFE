import React from 'react';
import Option from './Option.js';

export default class AddOption extends React.Component{
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({
        error: error
    }));
    if(option){
      e.target.elements.option.value = '';
    }
  }

  render(){
    return (
      <div>
        <h3> Escribe tu numero de control: </h3>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit = {this.handleAddOption}>
              <input type = "text" name = "option"/>
              <button> Inscribeme! </button>
        </form>
      </div>
    );
  }
}
