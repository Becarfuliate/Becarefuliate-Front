import Tablero from './Tablero';

function Simulacion() {

  //Carga de las rondas
  const rondas = [];
  const ronda0 = [];
  const ronda1 = [];
  const ronda2 = [];
  const ronda3 = [];

  // Robot ID - IMG - Coordendas x;y - nombre
  ronda0.push({id: 0, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 500, y: 1000, xf: 700, yf: 1000, nombre: 'Joe-dete Nintendo', vida: 45, mira: 360, motor: 0, xmis: 500, ymis: 1000, xmisf: 500, ymisf: 340});
  ronda0.push({id: 1, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 0, y: 0, xf: 100, yf: 100, nombre: 'Mati', vida: 100, mira: 360, motor: 0, xmis: null, ymis: null, xmisf: null, ymisf: null});
  ronda0.push({id: 2, imagen: "https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png", x: 400, y: 280, xf: 500, yf: 340, nombre: 'Mario', vida: 96, mira: 45, motor: 0, xmis: null, ymis: null, xmisf: null, ymisf: null});
  ronda0.push({id: 3, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 0, y: 0, xf: 500, yf: 500, nombre: 'Steve', vida: 100, mira: 360, motor: 0, xmis: null, ymis: null, xmisf: null, ymisf: null});
  
  ronda1.push({id: 0, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 700, y: 1000, xf: 900, yf: 1000, nombre: 'Joe-dete Nintendo', vida: 45, mira: 360, motor: 0, xmis: 700, ymis: 1000, xmisf: 500, ymisf: 340});
  ronda1.push({id: 1, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 100, y: 100, xf: 260, yf: 260, nombre: 'Mati', vida: 100, mira: 360, motor: 0, xmis: null, ymis: null, xmisf: null, ymisf: null});
  ronda1.push({id: 2, imagen: "https://www.pngkey.com/png/full/324-3240404_dead-face-smiley.png", x: 500, y: 340, xf: 500, yf: 340, nombre: 'Mario', vida: 0, mira: 45, motor: 0, xmis: null, ymis: null, xmisf: null, ymisf: null});
  ronda1.push({id: 3, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 500, y: 500, xf: 1000, yf: 1000, nombre: 'Steve', vida: 100, mira: 360, motor: 0, xmis: null, ymis: null, xmisf: null, ymisf: null});
  
  ronda2.push({id: 0, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 900, y: 1000, xf: 1000, yf: 900, nombre: 'Joe-dete Nintendo', vida: 45, mira: 360, motor: 0, xmis: 900, ymis: 1000, xmisf: 500, ymisf: 340});
  ronda2.push({id: 1, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 260, y: 260, xf: 260, yf: 260, nombre: 'Mati', vida: 100, mira: 360, motor: 0, xmis: null, ymis: null, xmisf: null, ymisf: null});
  ronda2.push({id: 2, imagen: "https://toppng.com/uploads/preview/dead-pixel-society-black-and-white-pixel-11563243949kkuykxltej.png", x: 500, y: 340, xf: 500, yf: 340, nombre: 'Mario', vida: 0, mira: 45, motor: 0, xmis: null, ymis: null, xmisf: null, ymisf: null});
  ronda2.push({id: 3, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 1000, y: 1000, xf: 1000, yf: 1000, nombre: 'Steve', vida: 20, mira: 360, motor: 0, xmis: 1000, ymis: 1000, xmisf: 300, ymisf: 220});
  
  ronda3.push({id: 0, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png", x: 900, y: 1000, xf: 1000, yf: 900, nombre: 'Joe-dete Nintendo', vida: 45, mira: 360, motor: 0, xmis: null, ymis: null, xmisf: null, ymisf: null});
  ronda3.push({id: 1, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", x: 260, y: 260, xf: 260, yf: 260, nombre: 'Mati', vida: 80, mira: 360, motor: 0, xmis: null, ymis: null, xmisf: null, ymisf: null});
  ronda3.push({id: 2, imagen: "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/451eb874bc5f737.png", x: 500, y: 340, xf: 500, yf: 340, nombre: 'Mario', vida: 0, mira: 45, motor: 0, xmis: null, ymis: null, xmisf: null, ymisf: null});
  ronda3.push({id: 3, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", x: 1000, y: 1000, xf: 1000, yf: 1000, nombre: 'Steve', vida: 20, mira: 360, motor: 0, xmis: null, ymis: null, xmisf: null, ymisf: null});

  rondas[0] = ronda0;
  rondas[1] = ronda1;
  rondas[2] = ronda2;
  rondas[3] = ronda3;
  
  return (
    <div id="Simulacion">
      <Tablero rondas={rondas}/>
    </div>
  );
}

export default Simulacion;