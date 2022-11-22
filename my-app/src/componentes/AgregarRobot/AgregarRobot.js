import React, {useState} from "react";
import exportServiceRobot from "../Servicios/serviceAgregarRobot";
import swal from "sweetalert";

const UserRobotCreate = () => {
    // El nombre del robot no puede ser el mismo que alguno que ya halla subido
    // El nombre del robot = nombre del archivo = nombre de la clase principal del archivo
    const [nameRobot, setNameRobot] = useState('');
    const [imgAvatar, setAvatar] = useState('');
    const [fileRobot, setFileRobot] = useState(null);
    const [fileRobotValidate, setFileRobotValidate] = useState(false);
    // Indica si el robot se guardo tanto en el back como en localstorage(solo su nombre pues con solo eso se podra hacer peticiones)

    const onChangeNameRobot = (e) => {
        setNameRobot(e.target.value);
    };

    const onChangeAvatar = (e) => {
        let avt = e.target;
        if(!avt) return;
        setAvatar(e.target.files[0]);
    };

    const onChangeFile = (e) => {
        let file = e.target; // Esto nunca debe ser null
        if(!file) return; // Esto impide trabajar con un null
        setFileRobot(e.target.files[0]);
    };
    
    const isFileNotEmpty = (file) => {
        return(0 !== file.size);
    };
    
    const isPythonFile = (file) => {
        let file_name = file.name;
        return(".py" === file_name.slice(file_name.lastIndexOf(".")));
    };

    // Pre: El nombre del archivo tiene al final la extension .py
    const nameFileEqualNameRobot = (file, name) => {
        return(name === file.name.slice(0,-3));
    };

    const nameRobotInFile = async (file, name) => {
        const fileText = await file.text()
        let isNameRobotInFile = false;
        if(fileText.includes("class " + name))
            isNameRobotInFile = true;
        return isNameRobotInFile;
    };

    // validaciones:
    // + el campo del nombre del robot no es vacio
    // + el archivo no es vacio
    // + es un archivo .py
    // + el nombre del robot es igual al nombre del archivo
    // + el nombre del robot es igual al nombre de la clase principal del robot

    const validateRobot = () => {
        let robotValid = false;
        if(isFileNotEmpty(fileRobot)) {
            if(isPythonFile(fileRobot)) {
                if(nameFileEqualNameRobot(fileRobot, nameRobot)) {
                    nameRobotInFile(fileRobot, nameRobot)
                    .then(isRstPositive => {
                        if(!isRstPositive) {
                            swal({
                                text: 'El nombre del robot debe ser igual al nombre de la clase principal del archivo del robot.',
                                icon: 'warning',
                                timer: '2500'
                            })
                        }
                        setFileRobotValidate(isRstPositive);
                    })
                } else {
                    swal({
                        text: 'El nombre del archivo debe ser igual al nombre del robot.',
                        icon: 'warning',
                        timer: '1800'
                    })
                }
            } else {
                swal({
                    text: 'No es un archivo python, no es aceptable.',
                    icon: 'warning',
                    timer: '1800'
                })
            }
        }
        else {
            swal({
                text: 'Archivo vacio, no es aceptable.',
                icon: 'warning',
                timer: '1800'
            })
        }
        return robotValid;
    };

    const handleRobot = (e) => {
        e.preventDefault();
        if("" === nameRobot) {
            swal({
                text: 'Campo del Nombre del Robot Vacio, escriba algo.',
                icon: 'warning',
                timer: '2500'
            })
        } else {
            if(!fileRobot) return;
            validateRobot();
            if(fileRobotValidate) {
                exportServiceRobot.serviceUploadRobot(fileRobot, imgAvatar, nameRobot);
                setNameRobot("");
                setAvatar(null);
                setFileRobot(null);
            }
        }
    };

    return (
        <div >
            <div className="form">
                <h1>Subir Robot</h1>
                <form id="form-robot" onSubmit={handleRobot}>
                    <div id="input-nombre-robot">
                        <input
                            className="input-label-nombre"
                            type="text"
                            placeholder="Nombre del Robot"
                            value={nameRobot}
                            onChange={onChangeNameRobot}
                        >
                        </input>
                    </div>
                    <div id="input-avatar-robot">
                        <h3>Subir AvatarRobot</h3>
                        <input
                            className="input-file-img"
                            type="file"
                            multiple={ false }
                            accept="image/*"
                            onChange={onChangeAvatar}
                        >
                        </input>
                    </div>
                    <div id="input-codigo-robot">
                        <h3>Subir codigo python del Robot</h3>
                        <input
                            className="input-file-file"
                            type="file"
                            multiple={ false }
                            accept=".py"
                            onChange={onChangeFile}
                        >
                        </input>
                    </div>
                    <div id='robot-submit'>
                        <input className='input-submit' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}

const AgregarRobot = () => {
    return (
        <div>
            <UserRobotCreate />
        </div>
    );
}

export default AgregarRobot

/*
import {sendDataRobot, modifyName, modifyAvatar, modifyConfig} from '../../store/addRobot/actions';
import {connect} from 'react-redux';

const UserRobotCreate = ({sendDataRobot, modifyName, modifyAvatar, modifyConfig}) => {
    return (
        <div id="create-robot">
            <div>
                <h1>Create Robot</h1>
                <form id="form-robot">
                    <div id="input-nombre-robot">
                        <h2>Nombre del Robot</h2>
                        <input className="input-label-nombre" type="text" placeholder="Nombre del Robot" name= "nameValue"
                            onChange={(e) => modifyName(e.target.value)} />
                    </div>
                    <div id="input-avatar-robot">
                        <h2>Subir AvatarRobot</h2>
                        <input className="input-file-img" type="file" multiple={ false } accept="image/*" name= "avatar"
                            onChange={(e) => modifyAvatar(e.target.files[0])} />
                    </div>
                    <div id="input-codigo-robot">
                        <h2>Subir codigo python del Robot</h2>
                        <input className="input-file-file" type="file" multiple={ false } accept=".py" name= "config"
                            onChange={(e) => modifyConfig(e.target.files[0])} />
                    </div>
                    <div id='robot-submit'>
                        <input type="button" onClick={() => sendDataRobot()} value="Submit" className='input-submit'/>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default connect(null, {sendDataRobot, modifyName, modifyAvatar, modifyConfig})(UserRobotCreate);
*/