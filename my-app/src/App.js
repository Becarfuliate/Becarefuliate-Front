import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./componentes/Home";
import Partida from "./componentes/Partida/Partida";
import Login from "./componentes/Login/Login";
import Registro from "./componentes/Registro/Register";
import Simulacion from "./componentes/Simulacion/Simulacion";

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

function App() {
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
            sx={{ fontSize: 24 }}
          >
            {'pyRobots'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="button"
              underline="none"
              href="/users/registro"
              sx={rightLink}
            >
              {'Registrarse'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href="/users/login"
              sx={rightLink}
            >
              {'Iniciar sesión'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users/login" component={Login} />
          <Route path="/users/registro" component={Registro} />
      </Switch>   
    </div>
  );
}


export default App;
