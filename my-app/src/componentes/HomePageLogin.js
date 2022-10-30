import { BrowserRouter as Switch, Route } from "react-router-dom";
import Simulacion from "./Simulacion/Simulacion";
import MuiToolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Partida from "./Partida/Partida";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import * as React from 'react';
import Home from "./Home";

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
}));

function AppBar(props) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function HomepageLogin() {
  const nameUser = JSON.parse(localStorage.getItem("user")).userlogin;
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24}}
          >
            {nameUser}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="button"
              underline="none"
              href="/partida/simulacion"
              sx={rightLink}
            >
              {'Crear simulación'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href="/user/crearPartida"
              sx={rightLink}
            >
              {'Crear partida'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href=""
              sx={rightLink}
            >
              {'Subir Robot'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Switch> 
          <Route path="/user/crearPartida" component={Partida} />
      </Switch>   
    </div>
  )
  //<Route exact path="/" component={listar_partidas} />; 
  //<Route exact path="/crearRobots" component={} />;
  //<Route exact path="/crearRobots" component={crear simulación} />; 
}

export default HomepageLogin;