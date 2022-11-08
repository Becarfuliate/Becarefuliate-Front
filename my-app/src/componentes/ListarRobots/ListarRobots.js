import exportServiceListarRobots from '../Servicios/serviceListarRobots';
import React, {useEffect, useState} from "react";
import './ListarRobots.css';

function Loading(){
    return (
        <div id='content-list-robots-loading'>
            <h5 className='loading-robots'>
                Loading Robots
                <span className='spinner-show'></span>
            </h5>
        </div>
    );
};

function ItemRobot(robot){
    return (
        <div className='block-robot'>
            <p><strong> Nombre:</strong>{robot.name}</p>
            <p><strong> Avatar:</strong>{robot.avatar}</p>
            <p><strong> Partidas Jugadas:</strong>{robot.matchs_pleyed}</p>
            <p><strong> Partidas Ganadas:</strong>{robot.matchs_won}</p>
            <p><strong> Tiempo promedio de vida:</strong>{robot.avg_life_time}</p>
        </div>
    );
}

function Listing(){
    const listResults = props.robots.map((robot, index) =>
            <li key={index} data-testid="robot-name">
                <ItemRobot robot= {robot}/>
            </li>
        )
    return ( <ul id='list-robots'>{listResults}</ul> );
};

function verifyDataListRobot(listRobots){
    const isArrayListRobots = Array.isArray(listRobots);
    const sizeListRobots = listRobots.length > 0;

    return isArrayListRobots && sizeListRobots;
}

const UserRobots = () => {
    const [listRobots, setListRobots] = useState([]);

    useEffect(() => {
        //VER
        exportServiceListarRobots.serviceListRobots().then(listRobots => setListRobots(listRobots));
    }, [setListRobots]);

    if (verifyDataListRobot(listRobots)) 
        return (<Listing robots={listRobots}/>);
    else 
        return (<Loading />);

};

const ListarRobots = () => {
    return (
        <div id='content-list-robots'>
            <UserRobots />
        </div>
    );
};


export default ListarRobots;