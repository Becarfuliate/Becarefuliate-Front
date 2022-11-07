import exportServiceRobot from './serviceAgregarRobot';

const defaultDataRobot = {
    name: "",
    config: null,
    avatar: null
};

function reducer(dataRobot = defaultDataRobot, action){
    const  dataUserChange = ({attribute, value}) => {
        return { ...dataRobot, [attribute]: value }; 
    };
    if (action.type === 'MODIFY_DATA_NAME_ROBOT') return dataUserChange({attribute:'name', value: action.data});
    else if (action.type === 'MODIFY_DATA_CONFIG_ROBOT') return dataUserChange({attribute:'config', value: action.data});
    else if (action.type === 'MODIFY_DATA_AVATAR_ROBOT') return dataUserChange({attribute:'avatar', value: action.data});
    else if(action.type === 'SEND_DATA_ROBOT') exportServiceRobot.serviceUploadRobot(dataRobot);

    return dataRobot;
}

export default reducer;