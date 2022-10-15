import './App.css';
import Board from './Components/Board';

function App() {
  const boardSize = 980;

  // Values to Generate Random Positions:
  const valuex = Math.floor(Math.random() * boardSize);
  const valuey = Math.floor(Math.random() * boardSize);
  
  const pieces = [];

  // Robot ID - IMG - Coordinates x;y - Name
  pieces.push({id: 12, image: "assets/images/robot-preview.png", x: 100, y: 800, name: 'joe'});
  pieces.push({id: 42, image: "assets/images/robot-preview.png", x: 200, y: 200, name: 'steve'});
  pieces.push({id: 78, image: "assets/images/b_pawn.png", x: 400, y: 600, name: 'mario'});
  pieces.push({id: 69, image: "assets/images/robot-preview.png", x: valuex, y: valuey, name: 'lichi-bot'});

  return (
    <div id="App">
      <Board pieces={pieces}/>
    </div>
  );
}

export default App;

