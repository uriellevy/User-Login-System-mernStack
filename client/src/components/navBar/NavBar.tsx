import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContextType } from "../../interfaces/interfaces";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { handleLogout} = useContext(AuthContext) as AuthContextType;

  return (
    <div className="navContainer">
      <NavLink
        to="/home"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Signup
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        onClick={handleLogout}
      >
        Logout
      </NavLink>
    </div>
  );
};

export default NavBar;
