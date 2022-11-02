import {ListaRobots, defaultDataSimulation, ejecutarPartida} from './serviceSimulation';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import List from '@mui/material/List';

function CrearPartida() {
  const [dataSimulation, setDataSimulation] = useState(defaultDataSimulation);
  const [lista, setLista] = useState([]); 
  ListaRobots().then((listaRobots => setLista(listaRobots)));

  const handleChange = (evt) => { setDataSimulation({ ...dataSimulation, [evt.target.name]: evt.target.value}) };

  const checkedList = (i) => { 
    if(dataSimulation.id_Robots.length <= 0) return false;
    else if(dataSimulation.id_Robots.indexOf(lista[i].id) === -1) return false;
    return true;
  };

  const checkedChange = (i) => {
    if(!checkedList(i)) dataSimulation.id_Robots.push(lista[i].id);
    else setDataSimulation(
      {...dataSimulation, id_Robots: dataSimulation.id_Robots.filter((robot) => robot !== lista[i].id)});
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form">
          
          <input type="number" name="cant_Rondas" placeholder="Cantidad de rondas" 
          onChange={handleChange} min="1" max="10000" required />

          <p>Robots que combatirán</p>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {lista.map((value, i) => ( 
                <ListItem key={value.name} disablePadding>
                  <ListItemButton onClick={() => checkedChange(i)} dense>
                    <ListItemIcon>
                      <Checkbox edge="start" checked={checkedList(i)} tabIndex={-1} disableRipple
                        inputProps={{ 'aria-labelledby': `checkbox-list-label-${value.name}` }}/>
                    </ListItemIcon>
                    <ListItemText id={ `checkbox-list-label-${value.name}`} primary={`Robot: ${value.name}`} />
                  </ListItemButton>
                </ListItem>
            ))}
          </List>
          
          <input type="button" value="Ejecutar partida" onClick={() => ejecutarPartida(dataSimulation)} />
        </form>
        </div>
    </div>
  );
}

export default CrearPartida;