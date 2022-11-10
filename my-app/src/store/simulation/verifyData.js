function verifyId_robots(dataSimulation){
    const totalRobots = dataSimulation.id_robot.split(',').length - 1;
    const cantRoundsGreaterT2AndLess4 = totalRobots >= 2 && totalRobots <= 4;
    
    return cantRoundsGreaterT2AndLess4;
}

function verifyRounds(dataSimulation){
    const cantRoundsGreaterThan1AndLessThan10000 = dataSimulation.n_rounds_simulations > 1 && 
                                                    dataSimulation.n_rounds_simulations <= 10000;
    return cantRoundsGreaterThan1AndLessThan10000;
}

function verifyDataSimulation(dataSimulation){
    if(!verifyId_robots(dataSimulation)){
        alert("Los robots elegidos son mayores a 4 o menores a 2")
        return false;
    }
    if(!verifyRounds(dataSimulation)){
        alert("cantidad de rondas menor o igual a 1, o mayor a 10000");
        return false;
    }
    return true
}

export default verifyDataSimulation;