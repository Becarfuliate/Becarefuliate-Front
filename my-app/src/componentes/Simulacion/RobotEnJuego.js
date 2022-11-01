import "./RobotEnJuego.css";

//The Robot size of 21x21px.
const tamaño = 21;

const min = 0;
const max = 100;
const maxBorde = 1021-tamaño;
const maxMira = 360;

function RobotEnJuego({imagen, x, y, xf, yf, nombre, num, vida, motor, mira, ronda}) {

    // Check Bordes
    if (x < min) { x = min;}
    if (y < min) { y = min;}
    if (x > maxBorde) { x = maxBorde;}
    if (y > maxBorde) { y = maxBorde;}
    if (xf < min) { xf = min;}
    if (yf < min) { yf = min;}
    if (xf > maxBorde) { xf = maxBorde;}
    if (yf > maxBorde) { yf = maxBorde;}

    // Check Vida Limit
    if (vida > max) { vida = max;}
    if (vida < min) { vida = min;}
    
    // Check motor Limit
    if (motor > max) { motor = max;}
    if (motor < min) { motor = min;}

    // Check mira Limit
    if (mira > maxMira) { mira = maxMira;}
    if (mira < min) { mira = min;}

    //Robot: Aplicar Coordenadas.
    document.documentElement.style.setProperty("--xinit_" + num, x + "px");
    document.documentElement.style.setProperty("--yinit_" + num, (maxBorde-y) + "px");
    document.documentElement.style.setProperty("--xfinal_" + num, xf + "px");
    document.documentElement.style.setProperty("--yfinal_" + num, (maxBorde-yf) + "px");

    const robotanimar = { animation: `animate_${num} 1s linear forwards`}
    
    //Robot: Estadísitcas.
    const robotstats = { transform: `translate(199%, ${num*105}%)`}
    const robotvid = { width: `${3.5*vida}px`}
    
    return (
    <div key={ronda*(num+1)}>
        <div style={robotanimar} id="RobotEnJuego">
            <img src={imagen} alt=""></img>
            <p className="nombre">{nombre}</p>
        </div>
        <div style={robotstats} id="RobotStats">
            <img src={imagen} alt=""></img>
            <b className="nombre">Nombre: {nombre}</b>
            <b className="vidatext">{vida}%</b>
            <div className="maxvida"></div>
            <div style={robotvid} className="vida"></div>
            <b className="mira">Mira: {mira}°</b>
            <b className="motor">Motor: {motor}%</b>
        </div>
    </div>
    );
}

export default RobotEnJuego;