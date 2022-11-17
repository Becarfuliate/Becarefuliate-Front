import Tablero from './Tablero';

function Simulacion() {
  const rondas = JSON.parse(localStorage.getItem("simulacion"));

  return (
    <div id="Simulacion">
      <Tablero rondas={rondas}/>
    </div>
  );
}

export default Simulacion;