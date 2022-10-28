import React, {useState} from "react";
import { saveAs } from 'file-saver';
import axios from "axios";
import imgDefaultRobot from "../../img/avatar-robot-defect.png"


const UserRobotCreate = () => {
    const [nombreRobot, setNombreRobot] = useState('');
    const [nombreArchivo, setNombreArchivo] = useState('');
    const [archivo, setArchivo] = useState(null);
    const [avatar, setAvatar] = useState(imgDefaultRobot);

    const onChangeNombreRobot = (e) => {
        setNombreRobot(e.target.value);
    }

    // validacion de extension de arhivo debe ser .py
    const is_python_file = (file_name) =>
        console.log(".py" === file_name.slice(file_name.lastIndexOf(".")));
    // is_python_file(nombreArchivo);

    // validacion de archivo tiene una clase llamada igual al nombre del archivo => no puede ser vacio

    // necesitare del paquete liguero file-saver => hize npm install file-saver
    // const createFile = () => {
    //     const blob = new Blob([ myValue ], { type: 'text/plain; charset=utf-8' })
    //     saveAs(blob, )
    // }

    // Subir archivo y avatar al Back
    const subirArchivo = async () => {
        // const f = new FormData();
        // f.append('file', archivo);
        // f.append('file', avatar);
        // console.log(f.entries());
        console.log("--------------------------------------------------------");
        let name_robot = nombreRobot;
        // usar comillas simples inclinadas `` para estos pasajes de datos con parametros 
        await axios.post(`http://127.0.0.1:8000/upload/robot/${name_robot}`, {
            file_robot: archivo,
            img_robot: avatar
        }, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(rst => console.log(rst.data))
        .catch(err => console.log(err))
    }

    const handleRobot = (e) => {
        e.preventDefault();
        subirArchivo();
    }

    const onChangeAvatar = (e) => {
        const avt = e.target;
        if(!avt) return;
        setAvatar(e.target.files[0]);
    }
    // Chequear con en caniuse.com si el navegador web usado
    // es compatible
    const readFile = (e) => {
        const file = e.target.files[0]; // Esto nunca debe ser null(por ejemplo cuando cancelas la eleccion del archivo) o lanzara un error para ello agregamos la sgte.sentencia
        if(!file) return;
        // setArchivo(file);
        setArchivo(file);
        setNombreArchivo(file.name);
        console.log(file.name)
        console.log(nombreArchivo)
        // obtengo info del archivo

        const fileReader = new FileReader();
        // obtengo solo el texto dentro del archivo
        fileReader.readAsText(file);
        
        fileReader.onload = () => {
            let text_file = fileReader.result
            console.log(nombreArchivo)
            console.log(/class Punto/i.test(nombreArchivo));
            // console.log(fileReader.result);
        }

        fileReader.onerror = () => {
            // console.log(fileReader.error);
        }
    }

    

    return (
        <div id="create-robot">
            <h1>Create Robot</h1>
            <form id="form-robot" onSubmit={handleRobot}>
                <div id="input-nombre-robot">
                    <h2>Nombre del Robot</h2>
                    <input
                        className="input-label-nombre"
                        type="text"
                        placeholder="Nombre del Robot"
                        value={nombreRobot}
                        onChange={onChangeNombreRobot}
                    >
                    </input>
                </div>
                <div id="input-avatar-robot">
                    <h2>Subir AvatarRobot(opcional)</h2>
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
                    <h2>Subir codigo python del Robot</h2>
                    <input
                        className="input-file-file"
                        type="file"
                        multiple={ false }
                        accept=".py"
                        onChange={readFile}
                    >
                    </input>
                </div>
                <div id='robot-submit'>
                    <input className='input-submit' type="submit" value="Submit" />
                </div>
            </form>
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