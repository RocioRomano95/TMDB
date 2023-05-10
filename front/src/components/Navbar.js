import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  console.log("User", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const logOut = {
      isAuthenticated: false,
    };

    axios
      .post("/api/user/logout", logOut)
      .then((result) => result.data)
      .then((result) => {
        user.logOut(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return user.isAuthenticated ? (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary link-primary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li class="nav-item">
                <Link to="/movie" class="nav-link">
                  <button>Peliculas</button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/tvShows" class="nav-link">
                  <button>Programas de TV/Series</button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/logout" class="nav-link">
                  <button onSumbit={handleSubmit}>Log Out</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
