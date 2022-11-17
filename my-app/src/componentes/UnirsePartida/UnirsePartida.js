import { Button, Box, Modal, MenuItem, InputLabel, FormControl, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import { useHistory } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
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

const WebsocketConnect = ({socketConnect, dataSocket, usersJoin, addUserJoin, removeUserJoin, isUserJoinAdded}) => {
    //////////////////////
    console.log("Entre al Websocket", socketConnect)
    // console.log(dataSocket)
    const ws = useRef(null);

    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:8000/ws/match/${dataSocket.matchId}/${dataSocket.tkn}/${dataSocket.robotId}`);

        socket.onopen = () => {
            console.log("openned")
        }
        socket.onclose = () => {
            console.log("close")
        }
        socket.onmessage = (e) => {
            console.log("got message: ", e.data)
            // e.data es de tipo string pues es un JSON
            if(e.data) {
                let objResponse = JSON.parse(e.data)
                if(objResponse.join) {
                    let user = objResponse.join.split(":")[0];
                    let robot = objResponse.join.split(":")[1];
                    if(!isUserJoinAdded(dataSocket.matchId, user, robot, usersJoin)) {
                        addUserJoin(dataSocket.matchId, user, robot)
                    }
                    console.log("agregado")
                } else if(objResponse.leave) {
                    let user = objResponse.leave.split(":")[0];
                    let robot = objResponse.leave.split(":")[1];
                    if(isUserJoinAdded(dataSocket.matchId, user, robot, usersJoin)) {
                        removeUserJoin(dataSocket.matchId, user, robot, usersJoin)
                    }
                    console.log("removido")
                } else {
                    console.log(e.data)
                }
            }
        }
        socket.onerror = (e) => {
            console.log("error socket: ", e)
        }

        ws.current = socket;
        return () => {
            //Esto pasa si te sales del componente Unirse Partida
            console.log("cerre la tienda")
            socket.close()
        };
        //la linea de abajo quita el warning React Hook useEffect has missing dependencies:
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // setSocketConnect(false);
//////////////////////
}

const InputModal = (props) => {
    const [open, setOpen] = useState(false);
    const [selectedRobotID, setSelectedRobotID] = useState('');
    const [passMatch, setPassMatch] = useState("");
    const [socketConnect, setSocketConnect] = useState(false);

    // const [userJoin, setUserJoin] = useState('');
    // const [robotJoin, setRobotJoin] = useState('');
    const [usersJoin, setUsersJoin] = useState([]); // array vacio

    let user = JSON.parse(localStorage.getItem('user'));
    const [dataSocket, setDataSocket] = useState({
        matchId: props.matchID,
        robotId: selectedRobotID,
        tkn: user.token
    })

    // filtramos por el idMatch los correspondientes usuarios unidos
    // de esa partida, tambien servira para el borrado
    const addUserJoin = (idJoinMatch, userName, robotName) => {
        setUsersJoin([
            ...usersJoin,
            {
                matchId : idJoinMatch,
                name : userName,
                robot : robotName
            }
        ]);
    };

    const removeUserJoin = (idJoinMatch, userName, robotName, listUsersJoin) => {
        let filtredArray = listUsersJoin.filter(elem => elem.matchID !== idJoinMatch && elem.name !== userName && elem.robot !== robotName)
        setUsersJoin(filtredArray)
    }

    const isUserJoinAdded = (idJoinMatch, userName, robotName, listUsersJoin) => {
        return (listUsersJoin.reduce(elem => elem.matchId === idJoinMatch && elem.name === userName && elem.robotName === robotName, ""))
    };

    const history = useHistory();
    
    // pasaje a Lobby con un estado
    const handleRouteLobby = () =>{

        let state = {
            listUsersJoin: usersJoin
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
        return socketConnect;
    }
    
    let state_match_finalized = false;
    const handleOpen = (match_finalized) => {
        if(!match_finalized)
        setOpen(true);
    }
    
    const handleJoinMatch = () => {
        if('' !== selectedRobotID) {
            let updatedValue = {};
            updatedValue = {"robotId":selectedRobotID};
            setDataSocket(obj => ({
                ...obj,
                ...updatedValue
            }));
            setSocketConnect(true);
        } else {
            alert("Quiere Unirse ?, seleccione un Robot");
        }
        // console.log(socketConnect)
    }

    // al elegir un robot y (de ser necesario un password match)
    const handleCloseToLobby = () => {
            if(checkJoinAccepted()) {
                if(socketConnect)
                    setSocketConnect(false)
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
            {
                socketConnect &&
                <WebsocketConnect
                    dataSocket = {dataSocket}
                    socketConnect = {socketConnect}
                    usersJoin = {usersJoin}
                    addUserJoin = {addUserJoin}
                    removeUserJoin = {removeUserJoin}
                    isUserJoinAdded = {isUserJoinAdded}
                />
            }
            <Button variant="contained" onClick={handleJoinMatch}>
                Si has seleccionado a tu robot puedes Unirte
            </Button>
            <Button variant="contained" onClick={handleCloseToLobby}>
                Si te has unido, tienes permitido ir al Lobby
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
    // Cambia el state match si espera jugadores o espera inicio
    // o ver resultados o finalizo
    const [stateMatch, setStateMatch] = useState("Unirse");
    
    return (
        <InputModal matchID={props.matchID} stateMatch={stateMatch}/>
    );
}

export default UnirsePartida;