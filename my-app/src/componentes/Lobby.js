import * as React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Box, styled, Link, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import MuiToolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import HomepageLogin from './HomePageLogin';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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

const Lobby = () => {
  // como usar el useSelector para traer datos del store de redux
  // const { data } = useSelector(data => data);
  
  // Para probar
  let robotID = "10";
  let matchID = "2";
  let listUsersJoin = [{user:"juan", robot:"rb1", avatar:"avatar", creador_partida: "si"}, {user:"juan 2", robot:"rb2", avatar:"avatar 2", creador_partida: "no"}]

  const nameUser = JSON.parse(localStorage.getItem("user")).userlogin;
  
  const ListUserJoin = () => {
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {listUsersJoin.map((elem) => 
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="User avatar" src="#" />
            </ListItemAvatar>
            <ListItemText primary={elem.user} secondary={elem.robot} />
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
              href="#"
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
      <Switch> 
            <Route exact path="/home" component={HomepageLogin} />
          {/* <Route path="/user/crearPartida" component={Partida} /> */}
      </Switch>
    </div>
  )
}

export default Lobby;
