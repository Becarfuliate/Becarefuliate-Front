import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./componentes/Home";
import Partida from "./componentes/Partida/Partida";
import Login from "./componentes/Login/Login";
import Registro from "./componentes/registro/Register";

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
              <Link to={"/partida/agregar"} className="nav-link">
                Partida
              </Link>
            </li>
            <li>
              <Link to={"/users/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to={"/users/registro"} className="nav-link">
                Registro
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/partida/agregar" component={Partida} />
          <Route path="/users/login" component={Login} />
          <Route path="/users/registro" component={Registro} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
