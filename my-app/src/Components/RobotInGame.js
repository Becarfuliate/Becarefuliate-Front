import "./RobotInGame.css";

const minBorder = 0;
const maxBorder = 990;

//The Robot has a size of 10x10px.
export default function RobotInGame({image, x, y}) {

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
    const style = {
        top: `${maxBorder-y}px`,
        left: `${x}px`
    }

    return (
    <div style = {style} id="RobotInGame">
        <img src={image} alt=""></img>
    </div>);
}