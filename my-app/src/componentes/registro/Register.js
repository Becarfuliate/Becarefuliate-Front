import { defaultDataUser } from "./dataUser";
import loadDataUser from "./dataLoad.js";
import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [dataUser, setDataUser] = useState(defaultDataUser);

  const dataUserChange = (formBarInfo) => {
    const dateUserMod = formBarInfo.target;
    const { name, value } = dateUserMod;
    if (name !== "Photo") setDataUser({ ...dataUser, [name]: value });
    else setDataUser({ ...dataUser, [name]: dateUserMod.files[0] });
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form" onSubmit={() => loadDataUser(dataUser)}>
          <input
            type="text"
            placeholder="Nombre"
            name="Name"
            onChange={dataUserChange}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            name="Password"
            onChange={dataUserChange}
            required
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            name="Email"
            onChange={dataUserChange}
            required
          />

          <input
            type="file"
            accept="image/png, image/jpeg"
            placeholder="foto por defecto"
            name="Photo"
            onChange={dataUserChange}
          />

          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
}
export default Register;
