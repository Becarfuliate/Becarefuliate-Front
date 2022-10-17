import React, { useState } from "react";
import { partidas } from "./Servicios";
import fetchData from "./Auxiliar";

/**
 *
 * Usada para crear una partida con parámetros modificables
 */
function CrearPartida() {
  const [state, setState] = useState({
    name: "",
    max_players: "",
    password: "",
    n_matchs: "",
    n_rounds_match: "",
  });

  const handleChange = (evt) => {
    // check it out: we get the evt.target.name (which will be either "name" or "Maximo de jugadores")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    setState({ ...state, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (event) => {
    const postData = {
      name: state.name,
      max_players: state.max_players,
      min_players: 2,
      password: state.password,
      n_matchs: state.n_matchs,
      n_rounds_matchs: state.n_rounds_match,
    };
    partidas.servicioPartida(postData);
    event.preventDefault();
  };
  const [lectura, setLectura] = useState(true);

  const changeState = () => {
    if (lectura === false) setLectura(true);
    else setLectura(false);
  };
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchData().then((res) => {
      const new_data = res.data;
      setData(new_data);
    });
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre de partida</label>
        <input type="text" name="name" onChange={handleChange} required />

        <label>Maximo de jugadores</label>
        <input
          type="number"
          name="max_players"
          onChange={handleChange}
          required
        />

        <label>Contraseña</label>
        <button type="button" onClick={changeState}>
          Privado
        </button>
        <input
          type="text"
          name="password"
          onChange={handleChange}
          readOnly={lectura}
        />
        <label>Cantidad de juegos</label>
        <input type="number" name="n_matchs" onChange={handleChange} required />
        <label>Maximo de rondas</label>
        <input
          type="number"
          name="n_rounds_match"
          onChange={handleChange}
          required
        />
        <input type="submit" name="Submit" />
      </form>
      <div>
        <li>
          <>
            {data.map((item) => (
              <button type="button" key={item.id}>
                {item.name}
              </button>
            ))}
          </>
        </li>
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
