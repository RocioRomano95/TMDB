import { createContext, useState } from "react";

const initialState = {
  nombre: "",
  email: "",
  edad: "",
  nacionalidad: "",
  isAuthenticated: false,
  logUser: () => null,
  logOut: () => null,
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    nombre: "",
    email: "",
    edad: "",
    nacionalidad: "",
    isAuthenticated: false,
  });

  const logUser = (user) => {
    setAuth({
      nombre: user.nombre,
      email: user.email,
      edad: user.edad,
      nacionalidad: user.nacionalidad,
      isAuthenticated: true,
    });
  };
  const logOut = () => {
    setAuth({
      nombre: "",
      email: "",
      edad: "",
      nacionalidad: "",
      isAuthenticated: false,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        nombre: auth.nombre,
        email: auth.email,
        edad: auth.edad,
        nacionalidad: auth.nacionalidad,
        isAuthenticated: auth.isAuthenticated,
        logUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
