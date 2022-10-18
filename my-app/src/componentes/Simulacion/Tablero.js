import "./Tablero.css";
import RobotEnJuego from "./RobotEnJuego";

function Tablero({piezas}) {

    const tablero = [];
    
    // Add 4 Robots maximum
    piezas.slice(-4).forEach( function(elem, i) {
        tablero.push(
        <li key={elem.id}>
            <RobotEnJuego imagen={elem.imagen} x={elem.x} y={elem.y} nombre={elem.nombre}
                    num={i} vida={elem.vida} motor={elem.motor} mira={elem.mira}/>
        </li>);
    });

    return (
    <div id="Tablero">
        {tablero}
    </div>);
}

export default Tablero;