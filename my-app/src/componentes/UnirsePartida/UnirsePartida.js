import { Button, Box, Modal } from '@mui/material';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { modifyDataUserJoin, modifyDataMatchJoin, modifyDataRobotJoin } from '../../store/joinMatch/actions';
import {connect} from 'react-redux';

const InputModal = () => {
    const [open, setOpen] = useState(false);
    
    const history = useHistory();
  
    const handleRouteLobby = () =>{
        history.push("/lobby");
    }

    const onChangeRobotID = (e) => {
        modifyDataRobotJoin(e.target.value);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        console.log("cerro MODAL")
        setOpen(false);
        handleRouteLobby();
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
                onChange={onChangeRobotID}
            />
            <Button variant="contained" onClick={handleClose}>
                Si has ingresado el ID del robot te dejo ir al Lobby
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
        console.log("state ", state);
        console.log("matchID ", props.matchID);
        modifyDataMatchJoin(props.matchID);
        if("join" === state)
            return true;
        else
            return false;
    };

    return (
            (handleStateMatch(stateMatch)) ?
                <InputModal>
                    {stateMatch}
                </InputModal>
                :
                <Button onClick={handleRouteLobby}>
                    {stateMatch}
                </Button>
    );
}

export default connect(null, {modifyDataUserJoin, modifyDataMatchJoin, modifyDataRobotJoin})(UnirsePartida);