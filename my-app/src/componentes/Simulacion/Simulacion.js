import Tablero from './Tablero';

function Simulacion() {
  //const tamañoTablero = 980;
  
  // Valores para generar posiciones aleatorias:
  //const valorex = Math.floor(Math.random() * tamañoTablero);
  //const valorey = Math.floor(Math.random() * tamañoTablero);
  const rondas = [];
  const ronda0 = [];
  const ronda1 = [];
  const ronda2 = [];

  // Robot ID - IMG - Coordendas x;y - nombre
  ronda0.push({id: 1, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 0, y: 980, nombre: 'Joe', vida: 45, mira: 360, motor: 0});
  ronda0.push({id: 2, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 0, y: 0, nombre: 'Mati', vida: 100, mira: 360, motor: 0});
  ronda0.push({id: 3, imagen: "https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png", x: 450, y: 450, nombre: 'Mario', vida: 96, mira: 45, motor: 0});
  ronda0.push({id: 4, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 700, y: 700, nombre: 'Steve', vida: 100, mira: 360, motor: 0});
  
  ronda1.push({id: 1, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 490, y: 980, nombre: 'Joe', vida: 45, mira: 360, motor: 0});
  ronda1.push({id: 2, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 490, y: 0, nombre: 'Mati', vida: 100, mira: 360, motor: 0});
  ronda1.push({id: 3, imagen: "https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png", x: 450, y: 450, nombre: 'Mario', vida: 96, mira: 45, motor: 0});
  ronda1.push({id: 4, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 700, y: 700, nombre: 'Steve', vida: 100, mira: 360, motor: 0});
  
  ronda2.push({id: 1, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 980, y: 980, nombre: 'Joe', vida: 45, mira: 360, motor: 0});
  ronda2.push({id: 2, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 980, y: 0, nombre: 'Mati', vida: 100, mira: 360, motor: 0});
  ronda2.push({id: 3, imagen: "https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png", x: 450, y: 450, nombre: 'Mario', vida: 96, mira: 45, motor: 0});
  ronda2.push({id: 4, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 700, y: 700, nombre: 'Steve', vida: 100, mira: 360, motor: 0});
  
  rondas[0] = ronda0;
  rondas[1] = ronda1;
  rondas[2] = ronda2;
  
  return (
    <div id="Simulacion">
      <Tablero rondas={rondas}/>
    </div>
  );
}

export default Simulacion;

