const getDataRobotsUser = (callback) => {
    return {
        type: "GET_DATA_ROBOTS_USER",
        data: callback
    }
};

export {getDataRobotsUser};