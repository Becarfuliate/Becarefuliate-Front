import React, { useState } from 'react';


/**
 * 
 * Usada para crear una partida con parámetros modificables
 */
function crearPartida () {

  const [state, setState] = useState ({      
    nombre: '',
    max_players: '',
    max_rondas: ''
  });
    
  const handleChange = (evt) => {
    // check it out: we get the evt.target.name (which will be either "nombre" or "Maximo de jugadores")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    setState({...state, [evt.target.name]: evt.target.value });
  };
  const handleSubmit = (event) => {
    console.log('A name was submitted: ' + state.nombre);
    console.log('A max player was submitted: ' + state.max_players);
    console.log('A max player was submitted: ' + state.max_rondas);
    event.preventDefault();
  };
    return (
      <form onSubmit={handleSubmit}>
      
        <label>Nombre de partida</label>
        <input type="text" name="nombre" onChange={handleChange} required/>
        
        <label>Maximo de jugadores</label>
        <input type="number" name="max_players" onChange={handleChange} required/>

        <label>Maximo de rondas</label>
        <input type="number" name="max_rondas" onChange={handleChange} required/>

        <input type="submit" name="Submit" />
      </form>
    );  
  
}

function Partida () {
    return (
        <div>
          <crearPartida/>
        </div>
    );
}


export default Partida;