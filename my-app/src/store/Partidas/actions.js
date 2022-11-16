const getDataGamesUser = (callback) => {
    return {
        type: "GET_DATA_GAMES_USER",
        data: callback
    }
};

const sendDataGame = () => {
    return {
        type: "SEND_DATA_GAME",
        data: "send the user data to register"
    }
};

const modifyDataNameGame = (name) => {
    return {
        type: "MODIFY_DATA_NAME_GAME",
        data: name
    }
};

const modifyDataPasswordGame = (password) => {
    return {
        type: "MODIFY_DATA_PASS_GAME",
        data: password
    }
};

const modifyDataRoundsGame = (rounds) => {
    return {
        type: "MODIFY_DATA_ROUNDS_GAME",
        data: parseInt(rounds, 32)
    }
};

const modifyDataMaxPlayersGame = (players) => {
    return {
        type: "MODIFY_DATA_MAX_PLAYERS_GAME",
        data: parseInt(players, 32)
    }
};

const modifyDataGamesGame = (game) => {
    return {
        type: "MODIFY_DATA_GAME_GAME",
        data: parseInt(game, 32)
    }
};

export {getDataGamesUser, sendDataGame, modifyDataNameGame, 
        modifyDataPasswordGame, modifyDataRoundsGame, modifyDataGamesGame,
        modifyDataMaxPlayersGame};
