import React, { useState } from "react";
import { handleSubmit, defaultdataPartida } from "./Servicios";

function CrearPartida() {
  const [state, setState] = useState(defaultdataPartida);
  const [lectura, setLectura] = useState(true);

  const handleChange = (evt) => {
    console.log(state)
    setState({ ...state, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form">
          <input type="text" name="name" placeholder="Nombre de partida" 
          onChange={handleChange} required />

          <input type="number" name="max_players" placeholder="Cantidad de jugadores" 
          onChange={handleChange} required/>

          <button type="button" onClick={() => setLectura(!lectura)}> Privado </button>
          <input type="text" name="password" placeholder="Contraseña" 
          onChange={handleChange} readOnly={lectura} />

          <input type="number" name="n_matchs" placeholder="Cantidad de juegos" 
          onChange={handleChange} required />
          
          <input type="number" name="n_rounds_match" placeholder="Cantidad de rondas" 
          onChange={handleChange} required />

          <input type="button" value="Submit" onClick={(event) => handleSubmit(state)}/>
        </form>
        </div>
    </div>
  );
}

function Partida() {
  return (
    <div>
      <CrearPartida />
    </div>
  );
}

export default Partida;
