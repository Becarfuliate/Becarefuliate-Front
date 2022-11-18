import * as React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Box, styled, Link, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import MuiToolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import HomepageLogin from './HomePageLogin';
import { useLocation } from "react-router-dom";
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
//       socket.onmessage = (e) => {
//           console.log("got message: ", e.data)
//           // e.data es de tipo string pues es un JSON
//           if(e.data) {
//               let objResponse = JSON.parse(e.data)
//               if(objResponse.join) {
//                   let user = objResponse.join.split(":")[0];
//                   let robot = objResponse.join.split(":")[1];
//                   if(!isUserJoinAdded(dataSocket.matchId, user, robot, usersJoin)) {
//                       addUserJoin(dataSocket.matchId, user, robot)
//                   }
//                   console.log("agregado")
//               } else if(objResponse.leave) {
//                   let user = objResponse.leave.split(":")[0];
//                   let robot = objResponse.leave.split(":")[1];
//                   if(isUserJoinAdded(dataSocket.matchId, user, robot, usersJoin)) {
//                       removeUserJoin(dataSocket.matchId, user, robot, usersJoin)
//                   }
//                   console.log("removido")
//               } else {
//                   console.log(e.data)
//               }
//           }
//       }
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
  const [socketConnect, setSocketConnect] = useState(false);
  const [usersJoin, setUsersJoin] = useState([]); // array vacio
  

  //elementos traidos como un objeto de UnirsePartida
  // matchID: props.matchID,
  // maxPlayers: props.maxPlayers,
  // minPlayers: props.minPlayers,
  // nameMatch: props.nameMatch,
  // nameCreatorMatch: props.nameCreatorMatch,
  // stateMatch: props.stateMatch,
  // passMatch: passMatch
  let locationOfState = useLocation();
  let objectState = locationOfState.state;

  let user = JSON.parse(localStorage.getItem('user'));
  const nameUser = user.userlogin;
  
  // const [dataSocket, setDataSocket] = useState({
  //     matchId: props.matchID,
  //     robotId: selectedRobotID,
  //     tkn: user.token
  // })



  const handleOutMatch = () => {
    console.log("Intento Salir")
  }


  // filtramos por el idMatch los correspondientes usuarios unidos
  // de esa partida, tambien servira para el borrado
  // const addUserJoin = (idJoinMatch, userName, robotName) => {
  //     setUsersJoin([
  //         ...usersJoin,
  //         {
  //             matchId : idJoinMatch,
  //             name : userName,
  //             robot : robotName
  //         }
  //     ]);
  // };

  // const removeUserJoin = (idJoinMatch, userName, robotName, listUsersJoin) => {
  //     let filtredArray = listUsersJoin.filter(elem => elem.matchID !== idJoinMatch && elem.name !== userName && elem.robot !== robotName)
  //     setUsersJoin(filtredArray)
  // }

  // const isUserJoinAdded = (idJoinMatch, userName, robotName, listUsersJoin) => {
  //     return (listUsersJoin.reduce(elem => elem.matchId === idJoinMatch && elem.name === userName && elem.robotName === robotName, ""))
  // };

  // const handleJoinMatch = () => {
  //   if('' !== selectedRobotID) {
  //       let updatedValue = {};
  //       updatedValue = {"robotId":selectedRobotID};
  //       setDataSocket(obj => ({
  //           ...obj,
  //           ...updatedValue
  //       }));
  //       setSocketConnect(true);
  //   } else {
  //       alert("Quiere Unirse ?, seleccione un Robot");
  //   }
  // }

  let list = []
  const ListUserJoin = () => {
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {(Array.isArray(list) && list.length) &&
        list.map((elem, index) => 
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
              sx={rightLink} >
              {'Volver a Home'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href="#"
              sx={rightLink} >
              {'Nombre de partida'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href="/home"
              onClick={handleOutMatch}
              sx={rightLink} >
              {'Abandonar partida'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href="#"
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
