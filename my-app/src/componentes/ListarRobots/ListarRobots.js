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

const Listing = (props) => {
    console.log(props.robots);
    const listResults = props.robots.map((robot, index) =>
            <li key={index}>
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
        // Borrar luego es para probar como se ve la lista de robots
        // setListRobots([
        //     {
        //         "name": "Krlos",
        //         "avatar": "asdf",
        //         "matchs_pleyed": 2,
        //         "matchs_won": 2,
        //         "avg_life_time": 80,
        //         "id": 5
        //       },
        //       {
        //         "name": "Krlosssss",
        //         "avatar": "asdf",
        //         "matchs_pleyed": 4,
        //         "matchs_won": 24,
        //         "avg_life_time": 80,
        //         "id": 6
        //       },
        //       {
        //         "name": "Krloshhhhhh",
        //         "avatar": "asdf",
        //         "matchs_pleyed": 5,
        //         "matchs_won": 5,
        //         "avg_life_time": 80,
        //         "id": 7
        //       },
        // ])
    }, [changedListRobots]);



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

export default ListarRobots;