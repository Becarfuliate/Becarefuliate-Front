const sendDataRobot = () => {
    return {
        type: "SEND_DATA_ROBOT",
        data: ""
    }
};

const modifyName = (name) => {
    return {
        type: "MODIFY_DATA_NAME_ROBOT",
        data: name
    }
};

const modifyAvatar = (avatar) => {
    return {
        type: "MODIFY_DATA_AVATAR_ROBOT",
        data: avatar
    }
};

const modifyConfig = (config) => {
    return {
        type: "MODIFY_DATA_CONFIG_ROBOT",
        data: config
    }
};

export {sendDataRobot, modifyName, modifyAvatar, modifyConfig};