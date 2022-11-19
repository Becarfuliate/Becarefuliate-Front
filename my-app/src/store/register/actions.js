const sendDataUser = () => {
    return {
        type: "SEND_DATA",
        data: "send the user data to register"
    }
};

const modifyDataName = (name) => {
    return {
        type: "MODIFY_DATA_NAME",
        data: name
    }
};

const modifyDataPassword = (password) => {
    return {
        type: "MODIFY_DATA_PASS",
        data: password
    }
};

const modifyDataEmail = (email) => {
    return {
        type: "MODIFY_DATA_EMAIL",
        data: email
    }
};

const modifyDataAvatar = (avatar) => {
    return {
        type: "MODIFY_DATA_AVATAR",
        data: avatar
    }
};

export {sendDataUser, modifyDataName, modifyDataPassword, modifyDataEmail, modifyDataAvatar};