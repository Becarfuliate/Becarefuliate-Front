import {ListaRobots, defaultDataSimulation, EjecutarPartida} from './serviceSimulation';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import List from '@mui/material/List';
import { useHistory } from 'react-router-dom';

function CrearPartida() {
  const [dataSimulation, setDataSimulation] = useState(defaultDataSimulation);
  const [lista, setLista] = useState([]); 

  ListaRobots().then((listaRobots => setLista(listaRobots)));

  const handleChange = (evt) => { setDataSimulation({ ...dataSimulation, [evt.target.name]: evt.target.value}) };

  const checkedList = (i) => { 
    if(dataSimulation.id_robot.length <= 0) return false;
    else if(dataSimulation.id_robot.indexOf(lista[i].id) === -1) return false;
    return true;
  };

  const checkedChange = (i) => {
    if(!checkedList(i)) dataSimulation.id_robot.push(lista[i].id);
    else setDataSimulation(
      {...dataSimulation, id_robot: dataSimulation.id_robot.filter((robot) => robot !== lista[i].id)});
  };

  const history = useHistory();
  const eject = () => {
    //dataSimulation.id_robot.push(1);
    //dataSimulation.id_robot.push(2);
    EjecutarPartida(dataSimulation);
    if (dataSimulation.id_robot.length > 1 && dataSimulation.id_robot.length < 5 && dataSimulation.n_rounds_simulations > 1  && dataSimulation.n_rounds_simulations < 10000)
    {
      history.push('/simulacion');
    }
  };
  
  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form">
          
          <input type="number" name="n_rounds_simulations" placeholder="Cantidad de rondas" 
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
          
          <input type="button" value="Ejecutar partida" onClick={eject}/>
        </form>
        </div>
    </div>
  );
}

export default CrearPartida;