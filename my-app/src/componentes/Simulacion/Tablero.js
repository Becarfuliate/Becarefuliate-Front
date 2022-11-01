import "./Tablero.css";
import RobotEnJuego from "./RobotEnJuego";
import Misil from "./Misil";
import {useState, useEffect} from "react";

function Tablero({rondas}) {

    const [rondaActual, setrondaActual] = useState(1);

    const [vida, setVida] = useState(rondas[0].map(robot => robot.vida));
    const [x, setX] = useState(rondas[0].map(robot => robot.x));
    const [y, setY] = useState(rondas[0].map(robot => robot.y));
    const [xf, setXf] = useState(rondas[0].map(robot => robot.xf));
    const [yf, setYf] = useState(rondas[0].map(robot => robot.yf));
    const [id, setId] = useState(rondas[0].map(robot => robot.id));
    const [nombre, setNombre] = useState(rondas[0].map(robot => robot.nombre));
    const [motor, setMotor] = useState(rondas[0].map(robot => robot.motor));
    const [mira, setMira] = useState(rondas[0].map(robot => robot.mira));
    const [imagen, setImagen] = useState(rondas[0].map(robot => robot.imagen));
    const [xmis, setXmis] = useState(rondas[0].map(robot => robot.xmis));
    const [ymis, setYmis] = useState(rondas[0].map(robot => robot.ymis));
    const [xmisf, setXmisf] = useState(rondas[0].map(robot => robot.xmisf));
    const [ymisf, setYmisf] = useState(rondas[0].map(robot => robot.ymisf));
    
    useEffect( () => {
        if (rondaActual < rondas.length) {
            setTimeout(() => {
                setVida(rondas[rondaActual].map(robot => robot.vida));
                setX(rondas[rondaActual].map(robot => robot.x));
                setY(rondas[rondaActual].map(robot => robot.y));
                setXf(rondas[rondaActual].map(robot => robot.xf));
                setYf(rondas[rondaActual].map(robot => robot.yf));
                setId(rondas[rondaActual].map(robot => robot.id));
                setNombre(rondas[rondaActual].map(robot => robot.nombre));
                setMotor(rondas[rondaActual].map(robot => robot.motor));
                setMira(rondas[rondaActual].map(robot => robot.mira));
                setImagen(rondas[rondaActual].map(robot => robot.imagen));
                setXmis(rondas[rondaActual].map(robot => robot.xmis));
                setYmis(rondas[rondaActual].map(robot => robot.ymis));
                setXmisf(rondas[rondaActual].map(robot => robot.xmisf));
                setYmisf(rondas[rondaActual].map(robot => robot.ymisf));
                setrondaActual(rondaActual+1);    
            }, 960);
        }
    }, [rondaActual, rondas]);

    if (rondas[0].length === 4) {
        return (
            <div id="Tablero">
                <li key={id[0]}>
                    <RobotEnJuego imagen={imagen[0]} x={x[0]} y={y[0]} xf={xf[0]} yf={yf[0]} nombre={nombre[0]}
                    num={0} vida={vida[0]} motor={motor[0]} mira={mira[0]} ronda={rondaActual} /> 
                    <Misil xmis={xmis[0]} ymis={ymis[0]} xmisf={xmisf[0]} ymisf={ymisf[0]} num={0} ronda={rondaActual}/>
                </li>
                <li key={id[1]}>
                    <RobotEnJuego imagen={imagen[1]} x={x[1]} y={y[1]} xf={xf[1]} yf={yf[1]} nombre={nombre[1]}
                    num={1} vida={vida[1]} motor={motor[1]} mira={mira[1]} ronda={rondaActual}/>
                    <Misil xmis={xmis[1]} ymis={ymis[1]} xmisf={xmisf[1]} ymisf={ymisf[1]} num={1} ronda={rondaActual}/> 
                </li>
                <li key={id[2]}>
                    <RobotEnJuego imagen={imagen[2]} x={x[2]} y={y[2]} xf={xf[2]} yf={yf[2]} nombre={nombre[2]}
                    num={2} vida={vida[2]} motor={motor[2]} mira={mira[2]} ronda={rondaActual}/>
                    <Misil xmis={xmis[2]} ymis={ymis[2]} xmisf={xmisf[2]} ymisf={ymisf[2]} num={2} ronda={rondaActual}/> 
                </li>
                <li key={id[3]}>
                    <RobotEnJuego imagen={imagen[3]} x={x[3]} y={y[3]} xf={xf[3]} yf={yf[3]} nombre={nombre[3]}
                    num={3} vida={vida[3]} motor={motor[3]} mira={mira[3]} ronda={rondaActual}/>
                    <Misil xmis={xmis[3]} ymis={ymis[3]} xmisf={xmisf[3]} ymisf={ymisf[3]} num={3} ronda={rondaActual}/> 
                </li>
            </div>
        )
    } else if (rondas[0].length === 3) {
        return (
            <div id="Tablero">
                <li key={id[0]}>
                    <RobotEnJuego imagen={imagen[0]} x={x[0]} y={y[0]} xf={xf[0]} yf={yf[0]} nombre={nombre[0]}
                    num={0} vida={vida[0]} motor={motor[0]} mira={mira[0]} ronda={rondaActual}/>
                    <Misil xmis={xmis[0]} ymis={ymis[0]} xmisf={xmisf[0]} ymisf={ymisf[0]} num={0} ronda={rondaActual}/> 
                </li>
                <li key={id[1]}>
                    <RobotEnJuego imagen={imagen[1]} x={x[1]} y={y[1]} xf={xf[1]} yf={yf[1]} nombre={nombre[1]}
                    num={1} vida={vida[1]} motor={motor[1]} mira={mira[1]} ronda={rondaActual}/>
                    <Misil xmis={xmis[1]} ymis={ymis[1]} xmisf={xmisf[1]} ymisf={ymisf[1]} num={1} ronda={rondaActual}/> 
                </li>
                <li key={id[2]}>
                    <RobotEnJuego imagen={imagen[2]} x={x[2]} y={y[2]} xf={xf[2]} yf={yf[2]} nombre={nombre[2]}
                    num={2} vida={vida[2]} motor={motor[2]} mira={mira[2]} ronda={rondaActual}/>
                    <Misil xmis={xmis[2]} ymis={ymis[2]} xmisf={xmisf[2]} ymisf={ymisf[2]} num={2} ronda={rondaActual}/> 
                </li>
            </div>
        )
    }
    else if (rondas[0].length === 2) {
        return (
            <div id="Tablero">
                <li key={id[0]}>
                    <RobotEnJuego imagen={imagen[0]} x={x[0]} y={y[0]} xf={xf[0]} yf={yf[0]} nombre={nombre[0]}
                    num={0} vida={vida[0]} motor={motor[0]} mira={mira[0]} ronda={rondaActual}/>
                    <Misil xmis={xmis[0]} ymis={ymis[0]} xmisf={xmisf[0]} ymisf={ymisf[0]} num={0} ronda={rondaActual}/> 
                </li>
                <li key={id[1]}>
                    <RobotEnJuego imagen={imagen[1]} x={x[1]} y={y[1]} xf={xf[1]} yf={yf[1]} nombre={nombre[1]}
                    num={1} vida={vida[1]} motor={motor[1]} mira={mira[1]} ronda={rondaActual}/>
                    <Misil xmis={xmis[1]} ymis={ymis[1]} xmisf={xmisf[1]} ymisf={ymisf[1]} num={1} ronda={rondaActual}/> 
                </li>
            </div>
        )
    }
    else if (rondas[0].length === 1) {
        return (
            <div id="Tablero">
                <li key={id[0]}>
                    <RobotEnJuego imagen={imagen[0]} x={x[0]} y={y[0]} xf={xf[0]} yf={yf[0]} nombre={nombre[0]}
                    num={0} vida={vida[0]} motor={motor[0]} mira={mira[0]} ronda={rondaActual}/>
                    <Misil xmis={xmis[0]} ymis={ymis[0]} xmisf={xmisf[0]} ymisf={ymisf[0]} num={0} ronda={rondaActual}/> 
                </li>
            </div>
        )
    }
}

export default Tablero;