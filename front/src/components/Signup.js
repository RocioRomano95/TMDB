import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import URL_BACK from "../rutas";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const nombre = useInput();
  const email = useInput();
  const nacionalidad = useInput();
  const edad = useInput();
  const password = useInput();

  const navigate = useNavigate();
  const user = useInput(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoUsuario = {
      nombre: nombre.value,
      email: email.value,
      nacionalidad: nacionalidad.value,
      edad: edad.value,
      password: password.value,
    };
    axios
      .post(`${URL_BACK}/api/signup`, nuevoUsuario)
      .then((res) => {
        user.logOut(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input {...nombre} type="text" placeholder="Nombre" required />
        <input {...email} type="email" placeholder="Email" required />
        <input
          {...nacionalidad}
          type="text"
          placeholder="Nacionalidad"
          required
        />
        <input {...edad} type="number" placeholder="Edad" required />
        <input {...password} type="password" placeholder="Password" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Signup;
