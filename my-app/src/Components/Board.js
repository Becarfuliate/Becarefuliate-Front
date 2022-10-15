import "./Board.css";
import RobotInGame from "./RobotInGame";

function Board({pieces}) {

    const generatedBoard = GenerateBoard({pieces});

    return generatedBoard;
}

function GenerateBoard({pieces}) {
    
    const board = [];
    
    // Add 4 Robots maximum
    pieces.slice(-4).forEach( function(element, i) {
        board.push(
        <li key={i}>
            <RobotInGame id={element.id} image={element.image} x={element.x} y={element.y} name={element.name} num={i}/>
        </li>);
    });

    return (
    <div id="Board">
        {board}
    </div>);
}

export default Board;