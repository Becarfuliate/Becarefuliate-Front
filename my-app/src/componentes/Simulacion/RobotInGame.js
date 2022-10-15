import "./RobotInGame.css";

const minBorder = 0;
const maxBorder = 980;

//The Robot has a size of 20x20px.
function RobotInGame({id, image, x, y, name, num, health}) {

    // Check Borders
    if (x<minBorder) {
        x = minBorder;
    }
    if (y < minBorder) {
        y = minBorder;
    }
    if (x>maxBorder) {
        x = maxBorder;
    }
    if (y>maxBorder) {
        y = maxBorder;
    }

    //Apply Coordinates
    const robotpos = {
        top: `${maxBorder-y}px`,
        left: `${x}px`
    }
    
    const robothealth = {
        width: `${2*health}px`
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
        <p className="name">Name: {name}</p>
        <p className="healthtext">{health}%</p>
        <div className="maxhealth"></div>
        <div style={robothealth} className="health"></div>
    </div>
    </div>
    );
}

export default RobotInGame;