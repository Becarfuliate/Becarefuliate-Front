import {getDataRobotsUser} from '../../store/robots/actions';
import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import './ListarRobots.css';

function Listing(listRobots){
    const listResults = listRobots.robots.map((robot, index) =>
            <li key={index} data-testid="robot-name">
                <div className='block-robot'>
                    <p><strong> Nombre:</strong>{robot.name}</p>
                    <p><strong> Avatar:</strong>{robot.avatar}</p>
                    <p><strong> Partidas Jugadas:</strong>{robot.matchs_pleyed}</p>
                    <p><strong> Partidas Ganadas:</strong>{robot.matchs_won}</p>
                    <p><strong> Tiempo promedio de vida:</strong>{robot.avg_life_time}</p>
                </div>
            </li>
        )
    return ( <ul id='list-robots'>{listResults}</ul> );
};

function ListarRobots({getDataRobotsUser}){
    const [listRobots, setListRobots] = useState([]);
    const [responseDataRobot, useResponseDataRobot] = useState(false);

    useEffect(() => {
        if(responseDataRobot) setListRobots(JSON.parse(localStorage.getItem('robotListUser')));
        else getDataRobotsUser(useResponseDataRobot); 
    }, [responseDataRobot]);

    return (<div id='content-list-robots'><Listing robots={listRobots}/></div>);
};

export default connect(null, {getDataRobotsUser})(ListarRobots);