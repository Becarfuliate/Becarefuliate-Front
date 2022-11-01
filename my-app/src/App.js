import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./componentes/Home";
import Partida from "./componentes/Partida/Partida";
import Login from "./componentes/Login/Login";
import Registro from "./componentes/Registro/Register";
import Simulacion from "./componentes/Simulacion/Simulacion";
import { AgregarRobot } from "./componentes/AgregarRobot";

function App() {
  return (
    <Router>
      <div>
        <h2>PyRobots</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav)-link">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to={"/users/registro"} className="nav-link">
                Registro
              </Link>
            </li>
            <li>
              <Link to={"/users/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to={"/ match/add"} className="nav-link">
                Partida
              </Link>
            </li>
            <li>
              <Link to={"/partida/simulacion"} className="nav-link">
                Simulacion
              </Link>
            </li>
            <li>
              <Link to={"/robot/agregar"} className="nav-link">
                Agregar Robot
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users/login" component={Login} />
          <Route path="/users/registro" component={Registro} />
          <Route path="/ match/add" component={Partida} />
          <Route path="/partida/simulacion" component={Simulacion} />
          <Route path="/robot/agregar" component={AgregarRobot} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
