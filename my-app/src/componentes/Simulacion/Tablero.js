import "./Tablero.css";
import RobotEnJuego from "./RobotEnJuego";
import {useState, useEffect} from "react";

function Tablero({rondas}) {

    const [rondaActual, setrondaActual] = useState(1);
    console.log(`RondaActual:${rondaActual}`);
    console.log(`MaximoRondas:${rondas.length}`);

    const [vida, setVida] = useState(
        [rondas[0][0].vida, rondas[0][1].vida, rondas[0][2].vida, rondas[0][3].vida]
    );
    
    const [x, setX] = useState(
        [rondas[0][0].x, rondas[0][1].x, rondas[0][2].x, rondas[0][3].x]
    );
            
    const [y, setY] = useState(
        [rondas[0][0].y, rondas[0][1].y, rondas[0][2].y, rondas[0][3].y]
    );

    const [id, setId] = useState(
        [rondas[0][0].id, rondas[0][1].id, rondas[0][2].id, rondas[0][3].id]
    );

    const [nombre, setNombre] = useState(
        [rondas[0][0].nombre, rondas[0][1].nombre, rondas[0][2].nombre, rondas[0][3].nombre]
    );

    const [motor, setMotor] = useState(
        [rondas[0][0].motor, rondas[0][1].motor, rondas[0][2].motor, rondas[0][3].motor]
    );

    const [mira, setMira] = useState(
        [rondas[0][0].mira, rondas[0][1].mira, rondas[0][2].mira, rondas[0][3].mira]
    );

    const [imagen, setImagen] = useState(
        [rondas[0][0].imagen, rondas[0][1].imagen, rondas[0][2].imagen, rondas[0][3].imagen]
    );
        
    useEffect( () => {
        setTimeout(() => {
            setVida(
                rondas[rondaActual][0].vida, rondas[rondaActual][1].vida,
                rondas[rondaActual][2].vida, rondas[rondaActual][3].vida
            );
            setX(
                rondas[rondaActual][0].x, rondas[rondaActual][1].x,
                rondas[rondaActual][2].x, rondas[rondaActual][3].x
            );
            setY(
                rondas[rondaActual][0].y, rondas[rondaActual][1].y,
                rondas[rondaActual][2].y, rondas[rondaActual][3].y
            );
            setId(
                rondas[rondaActual][0].id, rondas[rondaActual][1].id,
                rondas[rondaActual][2].id, rondas[rondaActual][3].id
            );
            setNombre(
                rondas[rondaActual][0].nombre, rondas[rondaActual][1].nombre,
                rondas[rondaActual][2].nombre, rondas[rondaActual][3].nombre
            );
            setMotor(
                rondas[rondaActual][0].motor, rondas[rondaActual][1].motor,
                rondas[rondaActual][2].motor, rondas[rondaActual][3].motor
            );
            setMira(
                rondas[rondaActual][0].mira, rondas[rondaActual][1].mira,
                rondas[rondaActual][2].mira, rondas[rondaActual][3].mira
            );
            setImagen(
                rondas[rondaActual][0].imagen, rondas[rondaActual][1].imagen,
                rondas[rondaActual][2].imagen, rondas[rondaActual][3].imagen
            );
            if (rondaActual < rondas.length) {
                setrondaActual(rondaActual+1);
            }
        }, 3000);
    }, [rondaActual, rondas]);

    return (
        <div id="Tablero">
            <li>
                <RobotEnJuego imagen={imagen[0]} x={x[0]} y={y[0]} nombre={nombre[0]}
                            num={id[0]} vida={vida[0]} motor={motor[0]} mira={mira[0]}/>
            </li>
            <li >
                <RobotEnJuego imagen={imagen[1]} x={x[1]} y={y[1]} nombre={nombre[1]}
                            num={id[1]} vida={vida[1]} motor={motor[1]} mira={mira[1]}/>
            </li>
            <li >
                <RobotEnJuego imagen={imagen[2]} x={x[2]} y={y[2]} nombre={nombre[2]}
                            num={id[2]} vida={vida[2]} motor={motor[2]} mira={mira[2]}/>
            </li>
            <li >
                <RobotEnJuego imagen={imagen[3]} x={x[3]} y={y[3]} nombre={nombre[3]}
                            num={id[3]} vida={vida[3]} motor={motor[3]} mira={mira[3]}/>
            </li>
        </div>
    )

}

export default Tablero;