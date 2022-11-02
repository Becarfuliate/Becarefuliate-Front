function verifyId_robots(dataSimulation){
    const equalIdRobotAndCantRobots = (dataSimulation.id_Robots.length === dataSimulation.id_Robotcant_Robot);
    const cantRobotsGreater2 = (dataSimulation.id_Robotcant_Robot >= 2);
    return equalIdRobotAndCantRobots &&
           cantRobotsGreater2;
}

function verifyRounds(dataSimulation){
    const cantRoundsGreaterThan1AndLessThan10000 = dataSimulation.cant_Rondas > 1 && dataSimulation.cant_Rondas <= 1000;
    return cantRoundsGreaterThan1AndLessThan10000;
}

function verifyDataSimulation(dataSimulation){
    if(!verifyId_robots(dataSimulation)){
        alert("No se eligió la cantidad de robots exacta que combatirán")
        return false;
    }
    if(!verifyRounds(dataSimulation)){
        alert("cantidad de rondas menor o igual a 1, o mayor a 10000");
        return false;
    }
    return true
}

export default verifyDataSimulation;