import { Box, styled, Link, List, ListItem, ListItemAvatar, ListItemText, Avatar, Button, Typography } from '@mui/material';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import MuiToolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import HomepageLogin from './HomePageLogin';
import * as React from 'react';
import initMatch from './iniciarPartida/iniciarPartida';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
}));

const AppBar = (props) => {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

// Si es el usuario no se puede unir por algun motivo del back se lo patea afuera
// ,o sea, si te quieres unir pasas al Lobby por un momento hasta que sucesa 2 cosas: o te patea afuera o te quedas adentro y puedes ver quienes estan jugando
const Lobby = () => {
  const [socketDisconnect, setSocketDisconnect] = useState(false);
  const [usersJoin, setUsersJoin] = useState([]); // array vacio
  const [usersJoinChange, setUsersJoinChange] = useState(false);
  const [goHome, setGoHome] = useState(false);
  const [stateOfMatch, setStateOfMatch] = useState("Esperando Jugadores");
  //elementos traidos como un objeto de UnirsePartida
  // matchID: props.matchID,
  // maxPlayers: props.maxPlayers,
  // minPlayers: props.minPlayers,
  // nameMatch: props.nameMatch,
  // nameCreatorMatch: props.nameCreatorMatch,
  // passMatch: passMatch
  const history = useHistory();
  let locationOfState = useLocation();
  let objectState = locationOfState.state;
  // console.log(objectState)
  
  let user = JSON.parse(localStorage.getItem('user'));
  const nameUser = user.userlogin;
  const [startMatchResponse, setStartMatchResponse] = useState({});
  const [resultMatchResponse, setResultMatchResponse] = useState({});
  //Funcion que filtra de todos las partidas con usuarios unidos a los que
  //se necesitan de la partida actual en la que me encuentro
  
  const [dataSocket, setDataSocket] = useState({
      matchId: objectState.matchID,
      robotId: objectState.robotID,
      tkn: user.token,
      minPlayersNeeded: objectState.minPlayers
  })
  
  const handleOutMatch = () => {
    setSocketDisconnect(true);
    console.log("Se abandono la Partida, socketDisconnect", socketDisconnect)
  }
  
  const handleInitMatch = () => {
    console.log("Aqui poner la logica del iniciar");
    initMatch({id_match: dataSocket.matchId, name_user: nameUser}).then( response => setStartMatchResponse(response));
    if(startMatchResponse.state === 'OK') setResultMatchResponse(startMatchResponse.data);
    else console.log(startMatchResponse.data);
  };
  
  const handleOutToHome = () => {
    console.log("Volviendo a Home, socketDisconnect", socketDisconnect)
    setGoHome(true)
  }
  
  if(goHome) {
    history.push("/home");
  }

  // Construccion del socket y comunicacion establecida
  const ws = useRef(null);
  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/ws/match/${dataSocket.matchId}/${dataSocket.tkn}/${dataSocket.robotId}`);
    ws.current = socket;
  }, [dataSocket])
  // if(!socketDisconnect) {
    // }    
    
  useEffect(() => {
    
    const isUserJoinAdded = (idJoinMatch, userName, robotName,
      listUsersJoin) => {
        let result = false;
        console.log(listUsersJoin)
        let value = listUsersJoin.findIndex(elem => elem.matchId === idJoinMatch && elem.name === userName && elem.robot === robotName)
        console.log(-1 !== value)
        if(-1 !== value)
          result = true;
        return result;
    };

    //Almacenamiento de los usuarios que se van uniendo
    const addUserJoin = (idJoinMatch, userName, robotName) => {

      let usersJoinLocalStorage = [];
      if(localStorage.getItem('usersJoin')) {
        usersJoinLocalStorage = JSON.parse(localStorage.getItem('usersJoin'));
      }
      if(Array.isArray(usersJoinLocalStorage) && usersJoinLocalStorage.length) {
          if(!isUserJoinAdded(idJoinMatch, userName, robotName, usersJoinLocalStorage)) {
            usersJoinLocalStorage.push({
              matchId : idJoinMatch,
              name : userName,
              robot : robotName,
            });
            localStorage.setItem('usersJoin',
            JSON.stringify(usersJoinLocalStorage));
          }
      } else {
          localStorage.setItem('usersJoin', JSON.stringify([{
            matchId : idJoinMatch,
            name : userName,
            robot : robotName,
          }]));
      }
    }

    const removeUserJoin = (idJoinMatch, userName, robotName) => {
        let usersJoinLocalStorage = [];
        if(localStorage.getItem('usersJoin')) {
          usersJoinLocalStorage = JSON.parse(localStorage.getItem('usersJoin'));
          if(Array.isArray(usersJoinLocalStorage)
          && usersJoinLocalStorage.length) {
            if(isUserJoinAdded(idJoinMatch, userName, robotName, usersJoinLocalStorage)) {
              let filtredArray = usersJoinLocalStorage.filter(elem => elem.matchId !== idJoinMatch && elem.name !== userName && elem.robot !== robotName)
              localStorage.setItem('usersJoin',
              JSON.stringify(filtredArray));
            }
          }
        }
    }

    const handleMessageJoin = (message) => {
        console.log(message)
        // "join":"usuario:robot, usuario:robot"
        let listMessage = message.split(",")
        for(let element of listMessage) {
          let user = element.split(":")[0];
          let robot = element.split(":")[1];
          addUserJoin(dataSocket.matchId, user, robot)
        }
        console.log("agregado")
    }
  
    const handleMessageLeave = (message) => {
        console.log(message)
        let user = message.split(":")[0];
        let robot = message.split(":")[1];
        removeUserJoin(dataSocket.matchId, user, robot)
        console.log("removido")
    }
    const listenMessage = () => {
      //usamos onopen para esta seguro que hay una conexion que esta escuchando
      //el msj que vamos a enviar
      ws.current.onopen = () => {
          console.log("openned, escuchando respuestas del back")
          ws.current.onmessage = (e) => {
            console.log("got message: ", e.data)
            if(e.data) {
              let objResponse = JSON.parse(e.data)
              if(objResponse.join) {
                handleMessageJoin(objResponse.join);
                setUsersJoinChange(true);
              } else if(objResponse.leave) {
                handleMessageLeave(objResponse.leave);
                setUsersJoinChange(true);
              } else {
                alert(JSON.parse(e.data).status);
                ws.current.close();/////////////////////////cierro socket
                setGoHome(true);
              }
            }
          }
      }
    };
    const sendLeaveMatch = () => {
      //usamos onopen para esta seguro que hay una conexion que esta escuchando
      //el msj que vamos a enviar
      ws.current.onopen = () => {
          console.log("openned, envio peticion de dejar match")
          ws.current.send(JSON.stringify({"connection": "close"}));
      }
    };
    // Escuchando Respuestas del Back
    listenMessage();
    // Esto se ejecuta cuando salgo del componente Lobby
    if(socketDisconnect) {
      console.log("Pase para mandar al Back que me voy")
      sendLeaveMatch();
    }
    return () => {
        //Esto pasa si te sales del componente Unirse Partida
        console.log("cerre la tienda", socketDisconnect)
        // Problema aqui es que cuando quiero que otro usuario se una
        // en vez de join es un Cerrado
        ws.current.close();
    };
  }, [socketDisconnect, dataSocket])

  useEffect(() => {

    const filtredUsersJoinOfMatch = (idJoinMatch, listUsersJoin) => {
        let filtredArray = listUsersJoin.filter(elem => elem.matchId === idJoinMatch)
        return filtredArray;
    }

    let usersJoinLocalStorage = [];
    if(localStorage.getItem('usersJoin')) {
      usersJoinLocalStorage = JSON.parse(localStorage.getItem('usersJoin'));
      if(Array.isArray(usersJoinLocalStorage) && usersJoinLocalStorage.length) {
        setUsersJoin(filtredUsersJoinOfMatch(dataSocket.matchId, usersJoinLocalStorage));
        setUsersJoinChange(false);
      }
    }
    
    
    return () => {
      setUsersJoinChange(false);
    }
  }, [usersJoinChange, dataSocket])
  
  useEffect(() => {
    if(socketDisconnect) {
      setStateOfMatch("Unirse");
    } else {
      if(usersJoin.length && usersJoin.length === dataSocket.minPlayersNeeded) {
        setStateOfMatch("Esperando Inicio");
      }
    }
  }, [socketDisconnect, usersJoin, dataSocket])

  useEffect(() => {
    //Actualizar LocalStorage de la partida sobre su estado
    if(localStorage.getItem('stateMatchs')) {
        let listStateMatchs = JSON.parse(localStorage.getItem('stateMatchs'));
        let listUpdateStateMatchs = listStateMatchs.filter(element =>
                                        element.matchId !== dataSocket.matchId);
        listUpdateStateMatchs.push({
          matchId: dataSocket.matchId,
          state: stateOfMatch
        });
        localStorage.setItem('stateMatchs',
        JSON.stringify(listUpdateStateMatchs));     
    } else {
        localStorage.setItem('stateMatchs',JSON.stringify([{
          matchId: dataSocket.matchId,
          state: stateOfMatch
        }]));
    }
  }, [stateOfMatch, dataSocket])

  const ListUserJoin = () => {
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {(Array.isArray(usersJoin) && usersJoin.length) &&
        usersJoin.map((elem, index) => 
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt="User avatar" src="#" />
            </ListItemAvatar>
            <ListItemText primary={elem.name} secondary={elem.robot} />
          </ListItem>
        )}
      </List>
    );
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 0 }} />
          <Button
            variant="h6"
            underline="none"
            color="inherit"
            sx={{ fontSize: 24}} >
            {nameUser}
          </Button>
          {
           socketDisconnect &&
              <Button
                color="inherit"
                variant="button"
                underline="none"
                onClick={handleOutToHome}
                sx={rightLink} >
                {'Volver a Home'}
              </Button>
          }
          {!socketDisconnect &&           
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              color="inherit"
              variant="button"
              underline="none"
              onClick={handleOutToHome}
              sx={rightLink} >
              {'Volver a Home'}
            </Button>
            <Button
              variant="button"
              underline="none"
              sx={rightLink} >
              {objectState.nameMatch}
              Estado: {stateOfMatch}
            </Button>
            <Button
              variant="button"
              underline="none"
              onClick={handleOutMatch}
              sx={rightLink} >
              {'Abandonar partida'}
            </Button>
            <Button
              variant="button"
              underline="none"
              onClick={handleInitMatch}
              sx={rightLink} >
              {'Iniciar Partida'}
            </Button>
          </Box>
          }
        </Toolbar>
      </AppBar>
      <Typography variant="h3" component="h4">
        {stateOfMatch}
      </Typography>
      <ListUserJoin/>
      <Switch> 
            <Route exact path="/home" component={HomepageLogin} />
      </Switch>
    </div>
  )
}

export default Lobby;
