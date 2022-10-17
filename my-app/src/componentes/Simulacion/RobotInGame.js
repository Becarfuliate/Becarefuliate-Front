import "./RobotInGame.css";

const min = 0;
const max = 100;
const maxBorder = 980;
const maxFacing = 360;

//The Robot has a size of 20x20px.
function RobotInGame({image, x, y, name, num, health, motor, facing}) {

    // Check Borders
    if (x<min) {
        x = min;
    }
    if (y < min) {
        y = min;
    }
    if (x>maxBorder) {
        x = maxBorder;
    }
    if (y>maxBorder) {
        y = maxBorder;
    }

    // Check Health Limit
    if (health > max) {
        health = max;
    }
    if (health < min) {
        health = min;
    }
    
    // Check Motor Limit
    if (motor > max) {
        motor = max;
    }
    if (motor < min) {
        motor = min;
    }

    // Check Facing Limit
    if (facing > maxFacing) {
        facing = maxFacing;
    }
    if (facing < min) {
        facing = min;
    }

    //Apply Coordinates
    const robotpos = {
        top: `${maxBorder-y}px`,
        left: `${x}px`
    }
    
    const robothealth = {
        width: `${3.5*health}px`
    }

    const robotstats = {
        transform: `translate(199%, ${num*105}%)`
    }

    return (
    <div>
    <div style={robotpos} id="RobotInGame">
        <img src={image} alt=""></img>
        <p className="name">{name}</p>
    </div>
    <div style={robotstats} id="RobotStats">
        <img src={image} alt=""></img>
        <b className="name">Name: {name}</b>
        <b className="healthtext">{health}%</b>
        <div className="maxhealth"></div>
        <div style={robothealth} className="health"></div>
        <b className="facing">Facing: {facing}°</b>
        <b className="motor">Motor: {motor}%</b>
    </div>
    </div>
    );
}

export default RobotInGame;