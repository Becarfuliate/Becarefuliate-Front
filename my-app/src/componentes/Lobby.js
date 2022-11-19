import * as React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Box, styled, Link, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import MuiToolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import HomepageLogin from './HomePageLogin';
import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';

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

// const WebsocketConnect = ({socketConnect, dataSocket, usersJoin, addUserJoin, removeUserJoin, isUserJoinAdded}) => {
//   //////////////////////
//   console.log("Entre al Websocket", socketConnect)
//   // console.log(dataSocket)
//   const ws = useRef(null);
//   const socket = new WebSocket(`ws://localhost:8000/ws/match/${dataSocket.matchId}/${dataSocket.tkn}/${dataSocket.robotId}`);
//   ws.current = socket;
  
//   useEffect(() => {
//       socket.onopen = () => {
//           console.log("openned")
//       }
//       // socket.onclose = () => {
//       //     console.log("close")
//       // }
      // socket.onmessage = (e) => {
      //     console.log("got message: ", e.data)
      //     // e.data es de tipo string pues es un JSON
      //     if(e.data) {
      //         let objResponse = JSON.parse(e.data)
      //         if(objResponse.join) {
      //             let user = objResponse.join.split(":")[0];
      //             let robot = objResponse.join.split(":")[1];
      //             if(!isUserJoinAdded(dataSocket.matchId, user, robot, usersJoin)) {
      //                 addUserJoin(dataSocket.matchId, user, robot)
      //             }
      //             console.log("agregado")
      //         } else if(objResponse.leave) {
      //             let user = objResponse.leave.split(":")[0];
      //             let robot = objResponse.leave.split(":")[1];
      //             if(isUserJoinAdded(dataSocket.matchId, user, robot, usersJoin)) {
      //                 removeUserJoin(dataSocket.matchId, user, robot, usersJoin)
      //             }
      //             console.log("removido")
      //         } else {
      //             console.log(e.data)
      //         }
      //     }
      // }
//       socket.onerror = (e) => {
//           console.log("error socket: ", e)
//       }

//       // return () => {
//       //     //Esto pasa si te sales del componente Unirse Partida
//       //     console.log("cerre la tienda")
//       //     socket.close()
//       // };
//       //la linea de abajo quita el warning React Hook useEffect has missing dependencies:
//          // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   // setSocketConnect(false);
// //////////////////////
// }

// Si es el usuario no se puede unir por algun motivo del back se lo patea afuera
// ,o sea, si te quieres unir pasas al Lobby por un momento hasta que sucesa 2 cosas: o te patea afuera o te quedas adentro y puedes ver quienes estan jugando
const Lobby = () => {
  const [socketDisconnect, setSocketDisconnect] = useState(false);
  const [usersJoin, setUsersJoin] = useState([]); // array vacio
  const [usersJoinChange, setUsersJoinChange] = useState(false);
  const [goHome, setGoHome] = useState(false);
  //elementos traidos como un objeto de UnirsePartida
  // matchID: props.matchID,
  // maxPlayers: props.maxPlayers,
  // minPlayers: props.minPlayers,
  // nameMatch: props.nameMatch,
  // nameCreatorMatch: props.nameCreatorMatch,
  // stateMatch: props.stateMatch,
  // passMatch: passMatch
  const history = useHistory();
  let locationOfState = useLocation();
  let objectState = locationOfState.state;
  
  let user = JSON.parse(localStorage.getItem('user'));
  const nameUser = user.userlogin;

  //Funcion que filtra de todos las partidas con usuarios unidos a los que
  //se necesitan de la partida actual en la que me encuentro
  
  const [dataSocket, setDataSocket] = useState({
      matchId: objectState.matchID,
      robotId: objectState.robotID,
      tkn: user.token
  })
  
  const handleOutMatch = () => {
    setSocketDisconnect(true);
    console.log("Se abandono la Partida, socketDisconnect", socketDisconnect)
  }
  
  const handleInitMatch = () => {
    console.log("Aqui poner la logica del iniciar")
  };
  
  const handleOutToHome = () => {
    console.log("Volviendo a Home, socketDisconnect", socketDisconnect)
  }
  
  // Construccion del socket y comunicacion establecida
  const ws = useRef(null);
  
  if(goHome) {
    history.push("/home");
  }
  
  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/ws/match/${dataSocket.matchId}/${dataSocket.tkn}/${dataSocket.robotId}`);
    ws.current = socket;
    
    const isUserJoinAdded = (idJoinMatch, userName, robotName,
      listUsersJoin) => {
        return (listUsersJoin.reduce(elem => elem.matchId === idJoinMatch && elem.name === userName && elem.robotName === robotName, ""))
    };

    //Almacenamiento de los usuarios que se van uniendo
    const addUserJoin = (idJoinMatch, userName, robotName) => {
      let usersJoinLocalStorage = [];
      if(localStorage.getItem('usersJoin'))
        usersJoinLocalStorage = JSON.parse(localStorage.getItem('usersJoin'));
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
        let user = message.split(":")[0];
        let robot = message.split(":")[1];
        addUserJoin(dataSocket.matchId, user, robot)
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
          // Innecesario pues estoy reciviendo mensajes en listen
          // ws.current.onmessage = (e) => {
          //   console.log("got message: ", e.data)
          //   if(e.data) {
          //     handleMessageLeave(e.data);
          //   }
          // }
      }
    };
    // Escuchando Respuestas del Back
    listenMessage();
    // Esto se ejecuta cuando salgo del componente Lobby
    if(socketDisconnect) {
      sendLeaveMatch();
      ws.current.close();
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
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24}} >
            {nameUser}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="button"
              underline="none"
              href="/home"
              onClick={handleOutToHome}
              sx={rightLink} >
              {'Volver a Home'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href="#"
              sx={rightLink} >
              {objectState.nameMatch}
            </Link>
            <Link
              variant="button"
              underline="none"
              href="#"
              onClick={handleOutMatch}
              sx={rightLink} >
              {'Abandonar partida'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href="#"
              onClick={handleInitMatch}
              sx={rightLink} >
              {'Iniciar Partida'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <ListUserJoin/>
      {/* {
        socketConnect &&
        <WebsocketConnect
            dataSocket = {dataSocket}
            socketConnect = {socketConnect}
            usersJoin = {usersJoin}
            addUserJoin = {addUserJoin}
            removeUserJoin = {removeUserJoin}
            isUserJoinAdded = {isUserJoinAdded}
        />
      } */}
      <Switch> 
            <Route exact path="/home" component={HomepageLogin} />
          {/* <Route path="/user/crearPartida" component={Partida} /> */}
      </Switch>
    </div>
  )
}

export default Lobby;
