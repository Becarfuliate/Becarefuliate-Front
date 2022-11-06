const MESSAGE_ERROR_USERS = "La cantidad de usuarios es menor a 2, mayor a 4 o mayor a la cantidad máxima establecida";
const MESSAGE_ERROR_ROUNDS = "Las rondas son menores a 1 o mayores a 10000";
const MESSAGE_ERROR_GAMES = "Los juegos son menores a 1 o mayores a 200";

function verifyId_robots(users, n_users){
    const totalRobots = users.split(',').length - 1;
    const cantRobotsGreaterT2AndLess4 = totalRobots >= 2 && totalRobots <= 4;
    const cantRobotsLessMaxUsers = totalRobots <= n_users;

    return cantRobotsGreaterT2AndLess4 && cantRobotsLessMaxUsers;
}

function verifyRounds(rounds){
    const cantRoundsGreaterThan1AndLessThan10000 = rounds > 1 && rounds <= 10000;
    return cantRoundsGreaterThan1AndLessThan10000;
}

function verifyGames(games){
    const cantGamesGreaterThan1AndLessThan200 = games > 1 && games <= 200;
    return cantGamesGreaterThan1AndLessThan200;
}

function verifyDataPartida(dataPartida){
    if(!verifyId_robots(dataPartida.users)) 
        return {state: 'ERROR', data: MESSAGE_ERROR_USERS};
    else if(!verifyRounds(dataPartida.n_games_simulations, dataPartida.n_users))
        return {state: 'ERROR', data: MESSAGE_ERROR_ROUNDS};
    else if(!verifyGames(dataPartida.n_games_simulations))
        return {state: 'ERROR', data: MESSAGE_ERROR_GAMES};
        
    return {state: 'OK', data: ""};
}

export default verifyDataPartida;