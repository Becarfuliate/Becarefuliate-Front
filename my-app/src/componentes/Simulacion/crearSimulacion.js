import {ListaRobots, defaultDataSimulation, ejecutarPartida} from './serviceSimulation';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import List from '@mui/material/List';

function CheckboxList() {
  const [lista, setLista] = useState([]); 
  ListaRobots().then((listaRobots => setLista(listaRobots)));
  const [checked, setChecked] = React.useState(Array.from({length: lista.length}, (_, i) => false));
  const checkedChange = (position) => {
    const newLista = checked.map((val, i) => {
      if(position === i) return (val)? false : true;
      else return val;
    })
    setChecked(newLista);
  };
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {lista.map((value, i) => ( 
          <ListItem key={value} disablePadding>
            <ListItemButton onClick={() => checkedChange(i)} dense>
              <ListItemIcon>
                <Checkbox edge="start" checked={checked[i]} tabIndex={-1} disableRipple
                  inputProps={{ 'aria-labelledby': `checkbox-list-label-${value}` }}/>
              </ListItemIcon>
              <ListItemText id={ `checkbox-list-label-${value}`} primary={`Robot: ${value + 1}`} />
            </ListItemButton>
          </ListItem>
      ))}
    </List>
  );
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
