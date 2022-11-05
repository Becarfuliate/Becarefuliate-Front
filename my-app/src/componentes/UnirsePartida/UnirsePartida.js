import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";
import Lobby from '../Lobby';

const UnirsePartida = ()  => {

    const history = useHistory();
  
    const handleRouteLobby = () =>{ 
      history.push("/lobby");
    }

    return (
        <Button
        onClick={handleRouteLobby}>
            Unirse
        </Button>
    );
}

export default UnirsePartida;