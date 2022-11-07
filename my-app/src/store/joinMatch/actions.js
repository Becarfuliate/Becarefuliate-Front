const modifyDataUserJoin = (userLogin) => {
    return {
        type: "MODIFY_DATA_USER_JOIN",
        data: userLogin
    }
};

const modifyDataMatchJoin = (matchID) => {
    return {
        type: "MODIFY_DATA_MATCH_JOIN",
        data: matchID
    }
};

const modifyDataRobotJoin = (robotID) => {
    return {
        type: "MODIFY_DATA_ROBOT_JOIN",
        data: robotID
    }
};

export {
    modifyDataUserJoin,
    modifyDataMatchJoin,
    modifyDataRobotJoin
};