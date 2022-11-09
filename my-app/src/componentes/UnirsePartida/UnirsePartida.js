import { Button, Box, Modal, MenuItem, InputLabel, FormControl, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import exportServiceListarRobots from '../Servicios/serviceListarRobots'

const SelectRobot = ({selectedRobotID, setSelectedRobotID}) => {

    const [listRobots, setListRobots] = useState([]);
    
    const handleChange = (e) => {
        setSelectedRobotID(e.target.value);
        console.log(selectedRobotID)
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
                listRobots.map((elem, index) =>
                    <MenuItem key={index} value={elem.id}>
                        <em>{elem.name}</em>
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
    
    const history = useHistory();
  
    // pasaje a Lobby con un estado
    const handleRouteLobby = () =>{
        let state = {
            matchID: props.matchID,
            robotID: selectedRobotID
        }
        history.push("/lobby", state);
    }

    // en caso de que la partida requiera contraseña
    // solo se mostrara si la partida requiere contraseña
    let passRequired = true; // esto seria un prop que viene de listar partidas
    const onChangePasswordMatch = (e) => {
      setPassMatch(e.target.value)
    };

    // se envia peticion de join si es aceptado se lo pasa al Lobby
    // y deberia activarse el Websoscket dentro del Lobby
    const checkJoinAccepted = () => {
        return true;
    }

    const handleOpen = () => setOpen(true);

    // al elegir un robot y (de ser necesario un password match)
    const handleCloseToLobby = () => {
        if(checkJoinAccepted()) {
            setOpen(false);
            handleRouteLobby();
        }
    }

    // sino solo cerrar el modal
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
        <Button onClick={handleOpen}>Open modal</Button>
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
                Si has seleccionado a tu robot te dejo ir al Lobby
            </Button>
            <Button variant="contained" onClick={handleClose}>
                Cerrar Modal
            </Button>
            </Box>
        </Modal>
        </div>
    );
}


const UnirsePartida = (props)  => {
    
    const history = useHistory();
    const [stateMatch, setStateMatch] = useState("join");
  
    const handleRouteLobby = () =>{
        history.push("/lobby");
    }

    const handleStateMatch = (state) => {
        if("join" === state)
            return true;
        else
            return false;
    };
    
    if(handleStateMatch(stateMatch)) 
        return (
            <InputModal matchID={props.matchID}> 
                {stateMatch}
            </InputModal>
        );
    else 
        return (
            <Button onClick={handleRouteLobby}> {stateMatch} </Button>
        );
}

export default UnirsePartida;