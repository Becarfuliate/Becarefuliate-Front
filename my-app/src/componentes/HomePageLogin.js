import { BrowserRouter as Switch, Route } from "react-router-dom";
import Simulacion from "./Simulacion/Simulacion";
import MuiToolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Partida from "./Partida/Partida";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import * as React from 'react';
import ListarPartida from './listar_partidas/listarPartida';
import { useHistory } from "react-router-dom";

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

function SignOff(){
  const history = useHistory();
  localStorage.removeItem("user");
  history.push("/");
  window.location.reload()
}

function HomepageLogin() {
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
              href="/partida/simulacion"
              sx={rightLink} >
              {'Crear simulación'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href="/user/crearPartida"
              sx={rightLink} >
              {'Crear partida'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href="/"
              sx={rightLink} >
              {'Partidas'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href=""
              sx={rightLink} >
              {'Subir Robot'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href=""
              sx={rightLink} >
              {'Robots'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href="/signOff"
              sx={rightLink} >
              {'Cerrar sesión'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Switch> 
          <Route path="/user/crearPartida" component={Partida} />
          <Route path="/" component={ListarPartida} />
          <Route path="/signOff" component={SignOff} />
      </Switch>   
    </div>
  )
  //<Route exact path="/crearRobots" component={} />;
  //<Route exact path="/simulacion" component={Simulacion} />; 
}

export default HomepageLogin;