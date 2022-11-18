import { BrowserRouter as Switch, Route } from "react-router-dom";
import MuiToolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Registro from "./registro/Register";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Login from "./Login/Login";
import * as React from 'react';
import Home from "./Home";
import simulacion from "./Simulacion/Simulacion";

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

function HomePageUser() {
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
              href="/home/registro"
              sx={rightLink}
            >
              {'Registrarse'}
            </Link>
            <Link
              variant="button"
              underline="none"
              href="/home/login"
              sx={rightLink}
            >
              {'Iniciar sesión'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home/login" component={Login} />
          <Route path="/home/registro" component={Registro} />
          <Route exact path="/simulacion" component={simulacion} />
      </Switch>   
    </div>
  ); 

}

export default HomePageUser;