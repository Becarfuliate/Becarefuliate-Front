import {getDataRobotsUser} from '../../store/robots/actions';
import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import './ListarRobots.css';
import axios from 'axios';

// const defaultimgRobot = "./robot.png"

function ListarRobots({getDataRobotsUser}){
    const [listRobots, setListRobots] = useState([]);
    const [responseDataRobot, useResponseDataRobot] = useState(false);
    
    useEffect(() => {
        if(responseDataRobot) setListRobots(JSON.parse(localStorage.getItem('robotListUser')));
        else getDataRobotsUser(useResponseDataRobot);
    }, [responseDataRobot, getDataRobotsUser]);

    return (<Listing robots={listRobots}/>);
};

function Listing(listRobots) {

    const listResults = [];

    const [RobotImages, setRobotImages] = useState([]);
    useEffect(() => {
        const obtenerImagen = async (robotId) => {
            const tkn = JSON.parse(localStorage.getItem("user")).token;
            const baseURL = "http://127.0.0.1:8000";
            const response = await axios.get(baseURL + "/image", {params: { token: tkn, robot_id: robotId }});
            
            setRobotImages(RobotImages => [...RobotImages, response.data]);
        }
        // eslint-disable-next-line
        listRobots.robots.map( robot => {
            obtenerImagen(robot.id);
        })
    }, [listRobots])
    

    // eslint-disable-next-line
    listRobots.robots.map((robot, index) => {
        listResults.push(
            <div className='block-robot' key={index} data-testid="robot-name">
                <img src={`data:image/png;base64,${RobotImages[index]}`} alt="" />
                <p className="RobotName"> Nombre: {robot.name} </p>
                <p className="RobotId"> ID: {robot.id} </p>
                <p> Partidas Jugadas: {robot.matchs_pleyed} </p>
                <p> Partidas Ganadas: {robot.matchs_won} </p>
            </div>
        ) 
    }) 

    return (
        <div id="robot-list"> {listResults} </div>
    );
};

export default connect(null, {getDataRobotsUser})(ListarRobots);


    
