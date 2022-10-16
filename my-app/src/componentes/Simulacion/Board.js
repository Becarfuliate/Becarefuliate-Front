import "./Board.css";
import RobotInGame from "./RobotInGame";

function Board({pieces}) {

    const board = [];
    
    // Add 4 Robots maximum
    pieces.slice(-4).forEach( function(element, i) {
        board.push(
        <li key={element.id}>
            <RobotInGame image={element.image} x={element.x} y={element.y} name={element.name}
                    num={i} health={element.health} motor={element.motor} facing={element.facing}/>
        </li>);
    });

    return (
    <div id="Board">
        {board}
    </div>);
}

export default Board;