import { Button, Box, Modal, MenuItem, InputLabel, FormControl, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import { useHistory } from "react-router-dom";
import { useState, useEffect, useRef} from 'react';
import exportServiceListarRobots from '../Servicios/serviceListarRobots'

const SelectRobot = ({selectedRobotID, setSelectedRobotID}) => {

    const [listRobots, setListRobots] = useState([]);
    
    const handleChange = (e) => {
        setSelectedRobotID(e.target.value);
    };

    useEffect(() => {
        exportServiceListarRobots.serviceListRobots().then(listRobots => setListRobots(listRobots));
    }, [setListRobots]);

    return (
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Seleccione su Robot</InputLabel>
        <Select
            sx={{
                background: 'white',
                color: 'black',
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedRobotID}
            label="Robot"
            onChange={handleChange}
        >
            {
                (Array.isArray(listRobots) && listRobots.length) ?
                listRobots.map((robot, index) =>
                    <MenuItem key={index} value={robot.id}>
                        <em>{robot.name}</em>
                    </MenuItem>
                )
                :
                <MenuItem value="">
                    <em>Debe agregar robots para poder combatir</em>
                </MenuItem>
            }
        </Select>
        </FormControl>
    );
};

const InputModal = (props) => {
    const [open, setOpen] = useState(false);
    const [selectedRobotID, setSelectedRobotID] = useState('');
    const [passMatch, setPassMatch] = useState("");
    const state = useRef({});

    const history = useHistory();
    
    // pasaje a Lobby con un estado
    const handleRouteLobby = () =>{
        console.log(props)
        state.current = {
            matchID: props.matchID,
            maxPlayers: props.maxPlayers,
            minPlayers: props.minPlayers,
            nameMatch: props.nameMatch,
            nameCreatorMatch: props.nameCreatorMatch,
            stateMatch: props.stateMatch,
            passMatch: passMatch,
            robotID: selectedRobotID
        }
        history.push("/lobby", state.current);
    }
    
    // en caso de que la partida requiera contraseña
    // solo se mostrara si la partida requiere contraseña
    let passRequired = true; // esto seria un prop que viene de listar partidas
    const onChangePasswordMatch = (e) => {
        setPassMatch(e.target.value)
    };
    
    let state_match_finalized = false;
    const handleOpen = (match_finalized) => {
        if(!match_finalized)
            setOpen(true);
    }

    // al elegir un robot y (de ser necesario un password match)
    const handleCloseToLobby = () => {
        if('' !== selectedRobotID) {
            setOpen(false);
            handleRouteLobby();
        } else {
            alert("Quiere Unirse ?, seleccione un Robot");
        }
    }
    
    // sino solo cerrar el modal
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
        <Button onClick={() => handleOpen(state_match_finalized)}>
            {props.stateMatch}
        </Button>
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

            {passRequired && 
                <TextField
                    sx={{
                        background: 'white',
                        color: 'black',
                    }}
                    required
                    id="standard-password-input"
                    label="Password Match"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    value = {passMatch}
                    onChange = {onChangePasswordMatch}
                />
            }
            <SelectRobot 
                selectedRobotID = {selectedRobotID}
                setSelectedRobotID = {setSelectedRobotID}
            />
            <Button variant="contained" onClick={handleCloseToLobby}>
                Si has seleccionado a tu robot puedes ir al Lobby
            </Button>
            <Button variant="contained" onClick={handleClose}>
                Cerrar
            </Button>
            </Box>
        </Modal>
        </div>
    );
}


const UnirsePartida = (props)  => {

    // Cambia el state match si espera jugadores o espera inicio
    // o ver resultados o finalizo
    const [stateMatch, setStateMatch] = useState("Unirse");

    // Si tengo los datos en el localStorage me fijo si el usuario
    // esta unido entonces cambio a Esperando Jugadores o Listo para Iniciar
    return (
        <InputModal 
            matchID={props.matchID}
            maxPlayers={props.maxPlayers}
            minPlayers={props.minPlayers}
            nameMatch={props.nameMatch}
            nameCreatorMatch={props.nameCreatorMatch}
            stateMatch={stateMatch}
        />
    );
}

export default UnirsePartida;