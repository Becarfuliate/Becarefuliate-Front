import React, { Component } from 'react';

class Login extends Component {

  constructor () {
    super();
    this.state = {
      nombre: '',
      max_players: '',
      max_rondas: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "nombre" or "Maximo de jugadores")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.nombre);
    console.log('A max player was submitted: ' + this.state.max_players);
    console.log('A max player was submitted: ' + this.state.max_rondas);
    event.preventDefault();
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      
        <label>Nombre de partida</label>
        <input type="text" name="nombre" onChange={this.handleChange} required/>
        
        <label>Maximo de jugadores</label>
        <input type="number" name="max_players" onChange={this.handleChange} required/>

        <label>Maximo de rondas</label>
        <input type="number" name="max_rondas" onChange={this.handleChange} required/>

        <input type="submit" name="Submit" />
      </form>
    );  
  }
}

class Partida extends Component {
  render() {
    return (
        <div>
          <Login/>
        </div>
    );
  }
}

export default Partida;