import "./Board.css";
import RobotInGame from "./RobotInGame";

export default function Board({pieces}) {
    const board = [];

    // Add 4 Robots maximum
    pieces.slice(-4).forEach(element => {
        board.push(<RobotInGame image={element.image} x={element.x} y={element.y}/>); 
    });

    return <div id="Board">{board}</div>;
}