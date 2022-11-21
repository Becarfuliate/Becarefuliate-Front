import Tablero from './Tablero';

function Simulacion() {
  const rondas = JSON.parse(localStorage.getItem("simulacion"));

  if (rondas != null) {
    return (
      <div id="Simulacion">
        <Tablero rondas={rondas}/>
      </div>
    );
  } else {
    <div></div>
  }
}

export default Simulacion;