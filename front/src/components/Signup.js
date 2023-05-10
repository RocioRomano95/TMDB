import React from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import URL_BACK from "../rutas";

const Signup = () => {
  const nombre = useInput();
  const email = useInput();
  const nacionalidad = useInput();
  const edad = useInput();
  const password = useInput();

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
      .then((result) => result)
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
