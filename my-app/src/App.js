import './App.css';
import Board from './Components/Board';

function App() {
  const boardSize = 990;

  // Values to Generate Random Positions:
  const valuex = Math.floor(Math.random() * boardSize);
  const valuey = Math.floor(Math.random() * boardSize);
  
  // Add Images to generate in specified coordinates:
  const pieces = [];
  pieces.push({image: "assets/images/robot-preview.png", x: valuex, y: valuey});
  pieces.push({image: "assets/images/robot-preview.png", x: 200, y: 200});

  return (
    <div id="App">
      <Board pieces={pieces}/>
    </div>
  );
}

export default App;

