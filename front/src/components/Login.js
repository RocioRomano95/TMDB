import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import URL_BACK from "../rutas";

const Login = () => {
  const navigate = useNavigate();
  const password = useInput();
  const email = useInput();
  const user = useContext(AuthContext);
  console.log("User", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = {
      email: email.value,
      password: password.value,
    };
    axios
      .post(`${URL_BACK}/api/login`, usuario)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        user.logUser(res);
        navigate("/");
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="container mt-2">
      <h1> Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" name="mail" {...email} />
        <input
          type="password"
          placeholder="password"
          name="contraseña"
          {...password}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Login;
