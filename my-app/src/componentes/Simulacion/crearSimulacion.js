import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import List from '@mui/material/List';
import axios from "axios";

const baseURL = "http://127.0.0.1:8000";

const defaultDataSimulation = {
    id_Robots: [],
    cant_Rondas: 0,

    token: JSON.parse(localStorage.getItem("user")).token
};

async function ListaRobots(){
    const tkn = JSON.parse(localStorage.getItem("user")).token;
    const [lista, setLista] = useState([1,2,3,4,5]); 

    //await axios.get(baseURL + "/listaRobots?token=" + tkn)
    //.then((response) => setLista(response.data))
    //.catch((e) => setLista([1,2,3,4,5]));
    
    return lista;
}

function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const [lista, setLista] = useState([1,2,3,4,5]); 
  ListaRobots().then(e => setLista(e));
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[1,2,3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Robot: ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

async function ejecutarPartida(dataSimulation){
    await axios.post(baseURL + "/crearSimulacion", dataSimulation)
    .then((response) => alert("Pasar a nay"))
    .catch((err) => alert(err.response.datail));
}

function CrearPartida() {
  const [dataSimulation, setDataSimulation] = useState(defaultDataSimulation);

  const handleChange = (evt) => { setDataSimulation({ ...dataSimulation, [evt.target.name]: evt.target.value}) };

  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form">

          <input type="number" name="robots_id" placeholder="Cantidad de robots" 
          onChange={handleChange} min="2" max="4" required/>
          
          <input type="number" name="rounds" placeholder="Cantidad de rondas" 
          onChange={handleChange} min="1" max="10000" required />

          <p>Robots que combatirán</p>
          <CheckboxList/>
          
          <input type="button" value="Ejecutar partida" onClick={() => ejecutarPartida(dataSimulation)} />
        </form>
        </div>
    </div>
  );
}

export default CrearPartida;
