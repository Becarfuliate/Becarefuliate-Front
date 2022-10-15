import Board from './Board';

function Simulation() {
  const boardSize = 980;

  // Values to Generate Random Positions:
  const valuex = Math.floor(Math.random() * boardSize);
  const valuey = Math.floor(Math.random() * boardSize);
  
  const pieces = [];

  // Robot ID - IMG - Coordinates x;y - Name
  pieces.push({id: 12, image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 100, y: 800, name: 'joe', health: 45});
  pieces.push({id: 42, image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 100, y: 700, name: 'steve', health: 70});
  pieces.push({id: 78, image: "https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png", x: 700, y: 600, name: 'mario', health: 96});
  pieces.push({id: 69, image: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: valuex, y: valuey, name: 'lichi-bot', health: 101});

  return (
    <div id="Simulation">
      <Board pieces={pieces}/>
    </div>
  );
}

export default Simulation;

