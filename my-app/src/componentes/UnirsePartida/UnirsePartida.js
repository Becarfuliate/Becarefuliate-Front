import { Button, Box, Modal, MenuItem, InputLabel, FormControl } from '@mui/material';
import Select from '@mui/material/Select';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import exportServiceListarRobots from '../Servicios/serviceListarRobots'

const SelectRobot = () => {

    const [listRobots, setListRobots] = useState([]);
    const [selectedRobotID, setSelectedRobotID] = useState('');
    
    const handleChange = (e) => {
        setSelectedRobotID(e.target.value);
        console.log(selectedRobotID)
    };

    useEffect(() => {
        exportServiceListarRobots.serviceListRobots().then(listRobots => setListRobots(listRobots));
    }, []);

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

const InputModal = () => {
    const [open, setOpen] = useState(false);
    const [inputRobotID, setInputRobotID] = useState("");
    
    const history = useHistory();
  
    const handleRouteLobby = () =>{
        let state = {
            matchID: 2,
            robotID: 3
        }
        history.push("/lobby", state);
    }

    const onChangeRobotID = (e) => {
        setInputRobotID(e.target.value)
    };

    const checkInput = (input) => {
        return !isNaN(input) && (/[0-9]/.test(input));
    };

    const handleOpen = () => setOpen(true);
    const handleCloseToLobby = () => {
        if(checkInput(inputRobotID)) {
            setOpen(false);
            handleRouteLobby();
        } else {
            alert("Escriba el ID de su Robot combatiente");
        }
    }
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
            <input
                type="number"
                name="robot ID"
                placeholder="Escriba el ID del Robot"
                value={inputRobotID}
                onChange={onChangeRobotID}
            />
            <SelectRobot />
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
            <InputModal> {stateMatch} </InputModal>
        );
    else 
        return (
            <Button onClick={handleRouteLobby}> {stateMatch} </Button>
        );
}

export default UnirsePartida;