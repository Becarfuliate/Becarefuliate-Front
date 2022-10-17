<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./componentes/Home";
import Partida from "./componentes/Partida/Partida";
import Login from "./componentes/Login/Login";
import Registro from "./componentes/registro/Register";
import Simulacion from "./componentes/Simulacion/Simulacion";

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
            <li>
              <Link to={"/partida/simulacion"} className="nav-link">
                Simulacion
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
          <Route path="/partida/simulacion" component={Simulacion} />
        </Switch>
      </div>
    </Router>
=======
import './App.css';
import Board from './Components/Board';

function App() {
  const boardSize = 980;

  // Values to Generate Random Positions:
  const valuex = Math.floor(Math.random() * boardSize);
  const valuey = Math.floor(Math.random() * boardSize);
  
  const pieces = [];

  // Robot ID - IMG - Coordinates x;y - Name
  pieces.push({id: 12, image: "assets/images/robot-preview.png", x: 100, y: 800, name: 'joe'});
  pieces.push({id: 42, image: "assets/images/robot-preview.png", x: 200, y: 200, name: 'steve'});
  pieces.push({id: 78, image: "assets/images/b_pawn.png", x: 400, y: 600, name: 'mario'});
  pieces.push({id: 69, image: "assets/images/robot-preview.png", x: valuex, y: valuey, name: 'lichi-bot'});

  return (
    <div id="App">
      <Board pieces={pieces}/>
    </div>
>>>>>>> a0f226e97b196a4fec9e502a1578fee1e8db7168
  );
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> a0f226e97b196a4fec9e502a1578fee1e8db7168
