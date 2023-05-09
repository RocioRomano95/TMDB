import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useContext(AuthContext);
  return user.isAuthenticated ? (
    <div>
      <Link to="">
        <button>Peliculas</button>
      </Link>
      <button>Programas de TV/Series</button>
      <button>logOut</button>
    </div>
  ) : (
    <div>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <Link to="/login">
        <button> Login</button>
      </Link>
    </div>
  );
};

export default Navbar;
