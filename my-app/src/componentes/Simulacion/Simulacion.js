import Tablero from './Tablero';

function Simulacion() {
  const tamañoTablero = 980;

  // Valores para generar posiciones aleatorias:
  const valorex = Math.floor(Math.random() * tamañoTablero);
  const valorey = Math.floor(Math.random() * tamañoTablero);
  
  const piezas = [];

  // Robot ID - IMG - Coordendas x;y - nombre
  piezas.push({id: 12, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 100, y: 800, nombre: 'joe', vida: 45, mira: 360, motor: 0});
  piezas.push({id: 42, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 100, y: 700, nombre: 'steve', vida: 70, mira: 280, motor: 0});
  piezas.push({id: 78, imagen: "https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png", x: 700, y: 600, nombre: 'mario', vida: 96, mira: 45, motor: 0});
  piezas.push({id: 69, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: valorex, y: valorey, nombre: 'lichi-bot', vida: 100, mira: 90, motor: 0});

  return (
    <div id="Simulacion">
      <Tablero piezas={piezas}/>
    </div>
  );
}

export default Simulacion;

