import "./RobotEnJuego.css";

const min = 0;
const max = 100;
const maxBorde = 980;
const maxMira = 360;

//The Robot size of 20x20px.
function RobotEnJuego({imagen, x, y, nombre, num, vida, motor, mira}) {

    // Check Borders
    if (x<min) {
        x = min;
    }
    if (y < min) {
        y = min;
    }
    if (x>maxBorde) {
        x = maxBorde;
    }
    if (y>maxBorde) {
        y = maxBorde;
    }

    // Check Vida Limit
    if (vida > max) {
        vida = max;
    }
    if (vida < min) {
        vida = min;
    }
    
    // Check motor Limit
    if (motor > max) {
        motor = max;
    }
    if (motor < min) {
        motor = min;
    }

    // Check mira Limit
    if (mira > maxMira) {
        mira = maxMira;
    }
    if (mira < min) {
        mira = min;
    }

    //Apply Coordinates
    const robotpos = {
        top: `${maxBorde-y}px`,
        left: `${x}px`
    }
    
    const robotvida = {
        width: `${3.5*vida}px`
    }

    const robotstats = {
        transform: `translate(199%, ${num*105}%)`
    }

    return (
    <div>
    <div style={robotpos} id="RobotEnJuego">
        <img src={imagen} alt=""></img>
        <p className="nombre">{nombre}</p>
    </div>
    <div style={robotstats} id="RobotStats">
        <img src={imagen} alt=""></img>
        <b className="nombre">Nombre: {nombre}</b>
        <b className="vidatext">{vida}%</b>
        <div className="maxvida"></div>
        <div style={robotvida} className="vida"></div>
        <b className="mira">Mira: {mira}°</b>
        <b className="motor">Motor: {motor}%</b>
    </div>
    </div>
    );
}

export default RobotEnJuego;