import { sendDataUserJoin, modifyDataUserJoin, modifyDataMatchJoin, modifyDataRobotJoin } from '../../store/joinMatch/actions';
import { Button, Box, Modal } from '@mui/material';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import { useState } from 'react';

const InputModal = () => {
    const [open, setOpen] = useState(false);
    const [inputRobotID, setInputRobotID] = useState("");
    
    const history = useHistory();
  
    const handleRouteLobby = () =>{
        history.push("/lobby");
    }

    const onChangeRobotID = (e) => {
        setInputRobotID(e.target.value)
        modifyDataRobotJoin(inputRobotID);
    };

    const checkInput = (input) => {
        return !isNaN(input) && (/[0-9]/.test(input));
    };

    const handleOpen = () => setOpen(true);
    const handleCloseToLobby = () => {
        if(checkInput(inputRobotID)) {
            console.log(inputRobotID);
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
            // onClose={handleClose}
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
            <Button variant="contained" onClick={handleCloseToLobby}>
                Si has ingresado el ID del robot te dejo ir al Lobby
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
        modifyDataMatchJoin(props.matchID);

        return ("join" === state)? true : false;
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

export default connect(null, {modifyDataUserJoin, modifyDataMatchJoin, modifyDataRobotJoin})(UnirsePartida);