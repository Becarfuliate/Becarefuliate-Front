import Tablero from './Tablero';

function Simulacion() {
  //const tamañoTablero = 1000;
  
  // Valores para generar posiciones aleatorias:
  //const valorex = Math.floor(Math.random() * tamañoTablero);
  //const valorey = Math.floor(Math.random() * tamañoTablero);
  const rondas = [];
  const ronda0 = [];
  const ronda1 = [];
  const ronda2 = [];

  // Robot ID - IMG - Coordendas x;y - nombre
  ronda0.push({id: 0, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 500, y: 1000, xf: 700, yf: 1000, nombre: 'Joe', vida: 45, mira: 360, motor: 0});
  ronda0.push({id: 1, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 0, y: 0, xf: 100, yf: 100, nombre: 'Mati', vida: 100, mira: 360, motor: 0});
  ronda0.push({id: 2, imagen: "https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png", x: 450, y: 450, xf: 550, yf: 450, nombre: 'Mario', vida: 96, mira: 45, motor: 0});
  ronda0.push({id: 3, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 0, y: 0, xf: 500, yf: 500, nombre: 'Steve', vida: 100, mira: 360, motor: 0});
  
  ronda1.push({id: 0, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 700, y: 1000, xf: 900, yf: 1000, nombre: 'Joe', vida: 45, mira: 360, motor: 0});
  ronda1.push({id: 1, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 100, y: 100, xf: 200, yf: 200, nombre: 'Mati', vida: 100, mira: 360, motor: 0});
  ronda1.push({id: 2, imagen: "https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png", x: 550, y: 450, xf: 650, yf: 450, nombre: 'Mario', vida: 96, mira: 45, motor: 0});
  ronda1.push({id: 3, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 500, y: 500, xf: 1000, yf: 1000, nombre: 'Steve', vida: 100, mira: 360, motor: 0});
  
  ronda2.push({id: 0, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 900, y: 1000, xf: 1000, yf: 900, nombre: 'Joe', vida: 45, mira: 360, motor: 0});
  ronda2.push({id: 1, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 200, y: 200, xf: 300, yf: 450, nombre: 'Mati', vida: 100, mira: 360, motor: 0});
  ronda2.push({id: 2, imagen: "https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png", x: 650, y: 450, xf: 700, yf: 450, nombre: 'Mario', vida: 96, mira: 45, motor: 0});
  ronda2.push({id: 3, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 1000, y: 1000, xf: 1000, yf: 1000, nombre: 'Steve', vida: 100, mira: 360, motor: 0});
  
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


/*
  ronda0.push({id: 0, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 500, y: 1000, xf: 700, yf: 1000, nombre: 'Joe', vida: 45, mira: 360, motor: 0, xmis: 0, ymis: 0, xmisf: 0, ymisf: 0, explo: false});
  ronda0.push({id: 1, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 0, y: 0, xf: 0, yf: 0, nombre: 'Mati', vida: 100, mira: 360, motor: 0, xmis: 0, ymis: 0, xmisf: 0, ymisf: 0, explo: false});
  ronda0.push({id: 2, imagen: "https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png", x: 450, y: 450, xf: 550, yf: 450, nombre: 'Mario', vida: 96, mira: 45, motor: 0, xmis: 0, ymis: 0, xmisf: 0, ymisf: 0, explo: false});
  ronda0.push({id: 3, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 0, y: 0, xf: 500, yf: 500, nombre: 'Steve', vida: 100, mira: 360, motor: 0, xmis: 0, ymis: 0, xmisf: 0, ymisf: 0, explo: false});
  
  ronda1.push({id: 0, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 700, y: 1000, xf: 900, yf: 1000, nombre: 'Joe', vida: 45, mira: 360, motor: 0, xmis: 0, ymis: 0, xmisf: 0, ymisf: 0, explo: false});
  ronda1.push({id: 1, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 490, y: 0, xf: 490, yf: 0, nombre: 'Mati', vida: 100, mira: 360, motor: 0, xmis: 0, ymis: 0, xmisf: 0, ymisf: 0, explo: false});
  ronda1.push({id: 2, imagen: "https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png", x: 550, y: 450, xf: 650, yf: 450, nombre: 'Mario', vida: 96, mira: 45, motor: 0, xmis: 0, ymis: 0, xmisf: 0, ymisf: 0, explo: false});
  ronda1.push({id: 3, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 500, y: 500, xf: 1000, yf: 1000, nombre: 'Steve', vida: 100, mira: 360, motor: 0, xmis: 0, ymis: 0, xmisf: 0, ymisf: 0, explo: false});
  
  ronda2.push({id: 0, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 900, y: 1000, xf: 1000, yf: 900, nombre: 'Joe', vida: 45, mira: 360, motor: 0, xmis: 0, ymis: 0, xmisf: 0, ymisf: 0, explo: false});
  ronda2.push({id: 1, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 1000, y: 0, xf: 1000, yf: 0, nombre: 'Mati', vida: 100, mira: 360, motor: 0, xmis: 0, ymis: 0, xmisf: 0, ymisf: 0, explo: false});
  ronda2.push({id: 2, imagen: "https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png", x: 650, y: 450, xf: 700, yf: 450, nombre: 'Mario', vida: 96, mira: 45, motor: 0, xmis: 0, ymis: 0, xmisf: 0, ymisf: 0, explo: false});
  ronda2.push({id: 3, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 1000, y: 1000, xf: 1000, yf: 1000, nombre: 'Steve', vida: 100, mira: 360, motor: 0, xmis: 0, ymis: 0, xmisf: 0, ymisf: 0, explo: false});
*/