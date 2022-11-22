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
        const obtenerImagen = async (robot) => {
            const tkn = JSON.parse(localStorage.getItem("user")).token;
            const baseURL = "http://127.0.0.1:8000";
            const response = await axios.get(baseURL + "/image", {params: { token: tkn, robot_id: robot.id }});
            
            setRobotImages(RobotImages => [...RobotImages, [response.data, robot.name, robot.id, robot.matchs_pleyed, robot.matchs_won]]);
        }
        // eslint-disable-next-line
        listRobots.robots.map( robot => {
            obtenerImagen(robot);
        })
    }, [listRobots])
    

    const len = listRobots.robots.length;
    console.log(len);
    // eslint-disable-next-line
    RobotImages.slice(0, len).map((robot, index) => {
        listResults.push(
            <div className='block-robot' key={index} data-testid="robot-name">
                <img src={`data:image/png;base64,${robot[0]}`} alt="" />
                <p className="RobotName"> Nombre: {robot[1]} </p>
                <p className="RobotId"> ID: {robot[2]} </p>
                <p> Partidas Jugadas: {robot[3]} </p>
                <p> Partidas Ganadas: {robot[4]} </p>
            </div>
        ) 
    }) 

    return (
        <div id="robot-list"> {listResults} </div>
    );
};

export default connect(null, {getDataRobotsUser})(ListarRobots);


    
