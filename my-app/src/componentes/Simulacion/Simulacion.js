import Tablero from './Tablero';

function Simulacion() {
  //console.log(JSON.parse(localStorage.getItem("user")));
  const rondas = JSON.parse(localStorage.getItem("user"));
  
  return (
    <div id="Simulacion">
      <Tablero rondas={rondas}/>
    </div>
  );
}

export default Simulacion;