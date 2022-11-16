import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Toolbar, AppBar, Link, Box} from "@mui/material"

// Routes
import Home from "./Home";
import Registro from "./registro/Register";
import Login from "./Login/Login";

function HomePageUser() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: "#3f51b5"}}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="button"
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
              sx={{ m: 1 }}
            >
              {'Registrarse'}
            </Link>
            <Link
              color="inherit"
              variant="button"
              underline="none"
              href="/home/login"
              sx={{ m: 1 }}
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
      </Switch>   
    </div>
  ); 

}

export default HomePageUser;