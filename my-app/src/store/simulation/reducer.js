import {modifyIdRobots, removeIdRobot, modifyRounds} from './auxDataSimulation';
import {runSimulation, getUser, getToken} from './service';
import verifyDataSimulation from './verifyData';
import swal from "sweetalert";

const defaultDataSimulation = {
    id_robot: "",
    n_rounds_simulations: 0,
    user_creator: getUser(),
    token: getToken()
};

function reducer(dataSimulation = defaultDataSimulation, action){    
    const verifyData = verifyDataSimulation(dataSimulation);

    if (action.type === 'MODIFY_DATA_ROUNDS') return modifyRounds({dataSimulation: dataSimulation, value: action.data});
    else if (action.type === 'ADD_ROBOTS') return modifyIdRobots({dataSimulation: dataSimulation, value: action.data});
    else if (action.type === 'REMOVE_ROBOTS') return removeIdRobot({dataSimulation: dataSimulation, value: action.data});
    else if(action.type === 'SEND_DATA_SIMULATION' && verifyData.state === 'OK') runSimulation(dataSimulation, action.data);

    if(verifyData.state === 'ERROR' && action.type === 'SEND_DATA_SIMULATION'){
        swal({ text: verifyData.data, icon: 'warning', timer: '2500' });
        return dataSimulation;
    } else {
        return defaultDataSimulation;
    }
}

export default reducer;