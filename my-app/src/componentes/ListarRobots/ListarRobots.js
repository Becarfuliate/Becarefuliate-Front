import React, {useState, useEffect} from "react";
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

const Listing = (robots) => {
    return (
        robots.forEach((robot, index) => {
            <li key={index}>
                <div className='block-robot'>
                    <p>{robot.id}</p>
                    <p>{robot.name}</p>
                    <p>{robot.avatar}</p>
                    <p>{robot.matchs_pleyed}</p>
                    <p>{robot.matchs_won}</p>
                    <p>{robot.avg_life_time}</p>
                </div>
            </li>
        })
    );
};

const UserRobots = () => {
    const [listRobots, setListRobots] = useState(null);
    const [changedListRobots, setChangedListRobots] = useState(null);

    // ejecutar cada vez que se renderiza el componente
    // al final de renderizado de este
    // o en este caso cada vez que sube un robot el usuario
    // se pide saber si se agrego un robot para pedir su info al back
    // aunque deberia hacerse cada vez que finalizo una partida


    // se supone que deberia hacerlo una vez cada vez que cambie la lista de robots en localStorage pero no es asi sino que se ejecuta y no para de hacerlo ¿?
    useEffect(() => {
        const intervalId = setInterval(() => {
          setChangedListRobots(JSON.parse(localStorage.getItem('robots')));
        }, 1000);
      
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setListRobots(exportServiceListarRobots.serviceListRobots());
    }, [changedListRobots]);



    return (
        <div id='content-list-robots'>
            <ul>
                {
                (Array.isArray(listRobots) && listRobots.length) ?
                    <Listing id='list-robots' robots={listRobots}/>
                :
                    <Loading />
                }
            </ul>
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

export default ListarRobots;