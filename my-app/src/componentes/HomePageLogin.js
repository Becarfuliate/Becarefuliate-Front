import { useHistory, Switch, Route, Link } from "react-router-dom";
import { AppBar, Button, createTheme, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { blueGrey, indigo } from "@mui/material/colors";
import { Adb, AddBox, ExitToApp, FileUpload, Menu, Public, SportsEsports } from "@mui/icons-material";
import { useState } from "react";

// Routes
import home from "./Home";
import crearSimulacion from "./Simulacion/crearSimulacion";
import ListarPartida from "./ListarPartida/ListarPartida";
import Partida from "./Partida/Partida";
import objListarRobots from "./ListarRobots/ListarRobots";
import AgregarRobot from "./AgregarRobot/AgregarRobot";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: blueGrey
  }
})

function HomepageLogin() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const actionOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return(
    <div>
      <ThemeProvider theme={theme}>
        <Navbar actionOpen={actionOpen} />
        <Cajon variant="temporary" open={isDrawerOpen} onClose={actionOpen}/>
      </ThemeProvider>
      <Switch>
        <Route path="/home" component={home} />
        <Route path="/crearSimulacion" component={crearSimulacion} />
        <Route path="/listarPartidas" component={ListarPartida} />
        <Route path="/crearPartida" component={Partida} />
        <Route path="/listarRobot" component={objListarRobots.ListarRobots} />
        <Route path="/subirRobot" component={AgregarRobot} />
        <Route path="/signOff" component={SignOff} />
      </Switch>
    </div>
  );
}

const Navbar = (props) => {
  const nameUser = JSON.parse(localStorage.getItem("user")).userlogin;

  return(
    <div>
      <AppBar
        position="fixed"
        color="primary"
      >
        <Toolbar>

          <IconButton
            sx={{marginRight: 2}}
            color="inherit"
            aria-label="menu"
            onClick={()=>props.actionOpen()}
          >
            <Menu />
          </IconButton>

          <Typography variant="h6" sx={{fontWeight: "bold", marginLeft: "42%"}}>
            PyRobots
          </Typography>
          
          <Button href="/home" variant="text" color="inherit" sx={{position: "absolute", right: 20}}>
              {nameUser}
          </Button>

        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  );
}

const Cajon = (props) => {
  return(
    <Drawer
      PaperProps={{sx: {width: 260, flexShrink: 0}}}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <Toolbar>
        <Typography variant="h6" sx={{fontWeight: "bold", color: "grey", marginLeft: "22%"}}>
          PyRobots
        </Typography>
      </Toolbar>
      <Divider/>
      <Items/>

    </Drawer>
  );
}

const Items = () => {
  return(
    <div>
      <List component='nav'>
        <ListItem button component={Link} to="/crearSimulacion">
          <ListItemIcon>
            <SportsEsports/>
          </ListItemIcon>
          <ListItemText>
            Simulación
          </ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/listarPartidas">
          <ListItemIcon>
            <Public/>
          </ListItemIcon>
          <ListItemText>
            Ver Partidas
          </ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/crearPartida">
          <ListItemIcon>
            <AddBox/>
          </ListItemIcon>
          <ListItemText>
            Crear Partida
          </ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/listarRobot">
          <ListItemIcon>
            <Adb/>
          </ListItemIcon>
          <ListItemText>
            Ver Robots
          </ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/subirRobot">
          <ListItemIcon>
            <FileUpload/>
          </ListItemIcon>
          <ListItemText>
            Subir Robot
          </ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/signOff">
          <ListItemIcon>
            <ExitToApp/>
          </ListItemIcon>
          <ListItemText>
            Salir
          </ListItemText>
        </ListItem>

      </List>
    </div>
  );
}

function SignOff() {
  const history = useHistory();
  localStorage.removeItem("user");
  history.push("/");
  window.location.reload();
}

export default HomepageLogin;