import React, { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:8000/partida/agregar";

/**
 *
 * Usada para crear una partida con parámetros modificables
 */
function CrearPartida() {
  const [state, setState] = useState({
    nombre: "",
    max_jugadores: "",
    contrasenia: "",
    nro_juegos: "",
    nro_rondas_juego: "",
  });

  const handleChange = (evt) => {
    // check it out: we get the evt.target.name (which will be either "nombre" or "Maximo de jugadores")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    setState({ ...state, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (event) => {
    axios({
      method: "POST",
      url: baseURL,
      data: {
        nombre: state.nombre,
        max_jugadores: state.max_jugadores,
        min_jugadores: 0,
        contrasenia: state.contrasenia,
        nro_juegos: state.nro_juegos,
        nro_rondas_juego: state.nro_rondas_juego,
      },
    });
    event.preventDefault();
  };
  const [lectura, setLectura] = useState(true);

  const changeState = () => {
    if (lectura === false) setLectura(true);
    else setLectura(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre de partida</label>
      <input type="text" name="nombre" onChange={handleChange} required />

      <label>Maximo de jugadores</label>
      <input
        type="number"
        name="max_jugadores"
        onChange={handleChange}
        required
      />

      <label>Contraseña</label>
      <button type="button" onClick={changeState}>
        Click me!
      </button>
      <input
        type="text"
        name="contrasenia"
        onChange={handleChange}
        readOnly={lectura}
      />
      <label>Cantidad de juegos</label>
      <input type="number" name="nro_juegos" onChange={handleChange} required />
      <label>Maximo de rondas</label>
      <input
        type="number"
        name="nro_rondas_juego"
        onChange={handleChange}
        required
      />
      <input type="submit" name="Submit" />
    </form>
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
