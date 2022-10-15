import "./RobotInGame.css";
import { useState } from "react";

const minBorder = 0;
const maxBorder = 980;

//The Robot has a size of 20x20px.
function RobotInGame({id, image, x, y, name, num}) {

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

    // const [rid, setrid] = useState(id);
    const [rname] = useState(name);
    const [xpos] = useState(x);
    const [ypos] = useState(y);
    const [rnum] = useState(num);
    const [rhealth] = useState(100);

    //Apply Coordinates
    const robotpos = {
        top: `${maxBorder-ypos}px`,
        left: `${xpos}px`
    }
    
    const robothealth = {
        width: `${2*rhealth}px`
    }

    const robotstats = {
        transform: `translate(199%, ${rnum*105}%)`
    }

    return (
    <div>
    <div style={robotpos} id="RobotInGame">
        <img src={image} alt=""></img>
        <p className="name">{rname}</p>
    </div>
    <div style={robotstats} id="RobotStats">
        <img src={image} alt=""></img>
        <p className="name">Name: {rname}</p>
        <p className="healthtext">{rhealth}%</p>
        <div className="maxhealth"></div>
        <div style={robothealth} className="health"></div>
    </div>
    </div>
    );
}

export default RobotInGame;