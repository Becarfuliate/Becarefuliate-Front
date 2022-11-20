import {getDataRobotsUser} from '../../store/robots/actions';
import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import './ListarRobots.css';


const imgRobot = "./robot.png"
//<p> Tiempo promedio de vida: {robot.avg_divfe_time}</p>

function Listing(listRobots){
    const listResults = listRobots.robots.map((robot, index) =>
            <div className='block-robot' key={index} data-testid="robot-name">
                <img src={imgRobot} alt=""></img>
                <p className="RobotName"> Nombre: {robot.name} </p>
                <p className="RobotId"> ID: {robot.id} </p>
                <p> Partidas Jugadas: {robot.matchs_pleyed} </p>
                <p> Partidas Ganadas: {robot.matchs_won} </p>
            </div>
        )
    return (
        <div id="robot-list"> {listResults} </div>
    );
};

function ListarRobots({getDataRobotsUser}){
    const [listRobots, setListRobots] = useState([]);
    const [responseDataRobot, useResponseDataRobot] = useState(false);
    
    useEffect(() => {
        if(responseDataRobot) setListRobots(JSON.parse(localStorage.getItem('robotListUser')));
        else getDataRobotsUser(useResponseDataRobot);
    }, [responseDataRobot, getDataRobotsUser]);

     return (<Listing robots={listRobots}/>);
};

export default connect(null, {getDataRobotsUser})(ListarRobots);