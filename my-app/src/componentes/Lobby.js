import { BrowserRouter as Switch, Route } from "react-router-dom";
import MuiToolbar from '@mui/material/Toolbar';
import { useHistory } from "react-router-dom";
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import * as React from 'react';
import HomepageLogin from './HomePageLogin'

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
  const nameUser = JSON.parse(localStorage.getItem("user")).userlogin;
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
      <div>
        Aca iria la lista de usuarios conectados
        Y en caso de finalizar la partida
        Indicar que finalizo
      </div>
      <Switch> 
            <Route exact path="/home" component={HomepageLogin} />
          {/* <Route path="/user/crearPartida" component={Partida} /> */}
      </Switch>
    </div>
  )
}

export default Lobby;
