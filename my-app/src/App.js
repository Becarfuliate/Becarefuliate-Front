import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Partida from "./components/Partida";

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
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/partida/agregar" component={Partida} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
