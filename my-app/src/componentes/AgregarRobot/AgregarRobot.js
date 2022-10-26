import React, {useState} from "react";
import { saveAs } from 'file-saver';

const UserRobotCreate = () => {
    const [nombreRobot, setNombreRobot] = useState("");

    const onChangeNombreRobot = (e) => {
        setNombreRobot(e.target.value);
    }

    // necesitare del paquete liguero file-saver => hize npm install file-saver
    // const createFile = () => {
    //     const blob = new Blob([ myValue ], { type: 'text/plain; charset=utf-8' })
    //     saveAs(blob, )
    // }

    // Chequear con en caniuse.com si el navegador web usado
    // es compatible
    const readFile = (e) => {
        console.log(e);
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
                >
                </input>
            </div>
            <div id="input-codigo-robot">
                <h2>Subir codigo python del Robot</h2>
                <input
                    className="input-file-file"
                    type="file"
                    multiple={ false }
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