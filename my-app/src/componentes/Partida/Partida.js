import {sendDataGame, modifyDataNameGame, modifyDataPasswordGame, 
        modifyDataRoundsGame, modifyDataGamesGame, modifyDataMaxPlayersGame} from '../../store/Partidas/actions';
import {connect} from 'react-redux';

function CrearPartida({sendDataGame, modifyDataNameGame, modifyDataPasswordGame, 
                      modifyDataRoundsGame, modifyDataGamesGame, modifyDataMaxPlayersGame}) {
  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form">
          <input type="text" name="name" placeholder="Nombre de partida" 
          onChange={(e) => modifyDataNameGame(e.target.value)} required />

          <input type="number" name="max_players" placeholder="Maximo de jugadores" 
          onChange={(e) => modifyDataMaxPlayersGame(e.target.value)} required/>

          <input type="text" name="password" placeholder="Contraseña" 
          onChange={(e) =>  modifyDataPasswordGame(e.target.value)} />

          <input type="number" name="n_matchs" placeholder="Cantidad de juegos" 
          onChange={(e) => modifyDataGamesGame(e.target.value)} required />
          
          <input type="number" name="n_rounds_match" placeholder="Maximo de rondas" 
          onChange={(e) => modifyDataRoundsGame(e.target.value)} required />

          <input type="button" value="Submit" onClick={() => sendDataGame()}/>
        </form>
        </div>
    </div>
  );
}

export default connect(null, {sendDataGame, modifyDataNameGame, modifyDataPasswordGame, 
                              modifyDataRoundsGame, modifyDataGamesGame, modifyDataMaxPlayersGame})(CrearPartida);
