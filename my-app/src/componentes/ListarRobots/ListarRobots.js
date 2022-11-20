import React, {useEffect, useState} from "react";
import './ListarRobots.css';
import exportServiceListarRobots from '../Servicios/serviceListarRobots';

const Loading = () => {
    return (
        <div id='robots-loading'>
            <h5 className='message'>
                Loading Robots...
            </h5>
            <div className="spinner"></div>
        </div>
    );
};

const imgRobot = "./robot.png"

//<p> Tiempo promedio de vida: {robot.avg_divfe_time}</p>

const Listing = (props) => {
    const listResults = props.robots.map((robot, index) =>
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

const UserRobots = () => {

    const [listRobots, setListRobots] = useState([]);
    useEffect(() => {
        exportServiceListarRobots.serviceListRobots().then(listRobots => setListRobots(listRobots));
    }, [setListRobots]);

    return (
        <div id='content-list-robots'>
                {
                (Array.isArray(listRobots) && listRobots.length) ?
                    <Listing robots={listRobots}/>
                :
                    <Loading />
                }
        </div>
    );
};

const ListarRobots = () => {
    return (
        <div>
            <UserRobots />
        </div>
    );
};

const objListarRobots = {
    ListarRobots,
    Listing
}

export default objListarRobots;