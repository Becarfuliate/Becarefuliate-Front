import React, {useState} from "react";
import './ListarRobots.css';
import exportServiceListarRobots from '../Servicios/serviceListarRobots';

const Loading = () => {
    return (
        <div id='content-list-robots-loading'>
            <h5 className='loading-robots'>
                Loading Robots
                <span className='spinner-show'></span>
            </h5>
        </div>
    );
};

const Listing = (props) => {
    const listResults = props.robots.map((robot, index) =>
            <li key={index} data-testid="robot-name">
                <div className='block-robot'>
                    <p><strong> ID:</strong> {robot.id}</p>
                    <p><strong> Nombre:</strong>{robot.name}</p>
                    <p><strong> Avatar:</strong>{robot.avatar}</p>
                    <p><strong> Partidas Jugadas:</strong>{robot.matchs_pleyed}</p>
                    <p><strong> Partidas Ganadas:</strong>{robot.matchs_won}</p>
                    <p><strong> Tiempo promedio de vida:</strong>{robot.avg_life_time}</p>
                </div>
            </li>
        )
    return (
        <ul id='list-robots'>{listResults}</ul>
    );
};

const UserRobots = () => {
    const [listRobots, setListRobots] = useState(null);
    exportServiceListarRobots.serviceListRobots().then(listRobots => setListRobots(listRobots));

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