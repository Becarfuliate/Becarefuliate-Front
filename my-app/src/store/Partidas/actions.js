const getDataGamesUser = (callback) => {
    return {
        type: "GET_DATA_GAMES_USER",
        data: callback
    }
};

export {getDataGamesUser};