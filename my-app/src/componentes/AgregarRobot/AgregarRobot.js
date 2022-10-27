import React, {useState} from "react";
import { saveAs } from 'file-saver';

const UserRobotCreate = () => {
    const [nombreRobot, setNombreRobot] = useState('');
    const [nombreArchivo, setNombreArchivo] = useState('');

    const onChangeNombreRobot = (e) => {
        setNombreRobot(e.target.value);
    }

    // validacion de extension de arhivo debe ser .py
    const is_python_file = (file_name) =>
        console.log(file_name.substring(file_name.lastIndexOf('.')));
    // validacion de archivo tiene una clase llamada igual al nombre del archivo => no puede ser vacio

    // necesitare del paquete liguero file-saver => hize npm install file-saver
    // const createFile = () => {
    //     const blob = new Blob([ myValue ], { type: 'text/plain; charset=utf-8' })
    //     saveAs(blob, )
    // }

    // Chequear con en caniuse.com si el navegador web usado
    // es compatible
    const readFile = (e) => {
        console.log(e);
        const file = e.target.files[0]; // Esto nunca debe ser null(por ejemplo cuando cancelas la eleccion del archivo) o lanzara un error para ello agregamos la sgte.sentencia
        if(!file) return;
        console.log(file.name);
        // obtengo info del archivo

        const fileReader = new FileReader();
        // obtengo solo el texto dentro del archivo
        fileReader.readAsText(file);

        fileReader.onload = () => {
            console.log(fileReader.result);
        }

        fileReader.onerror = () => {
            console.log(fileReader.error);
        }
    }

    return (
        <div id="create-robot">
            <h1>Create Robot</h1>
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