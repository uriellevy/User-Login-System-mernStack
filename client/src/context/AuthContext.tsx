import * as React from "react";
import { AuthContextType, ErrorMessage, IAuth, IUser } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user,setUser] = React.useState<IUser | null>(null);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const userString = localStorage.getItem("user");
    if(userString) {
      const loggedUser =  JSON.parse(userString) as IUser;
      console.log(loggedUser);
      setUser(loggedUser);
    }
  },[])

  const handleLogin = async (auth: IAuth) => {
    if (!auth.email || !auth.password) return;

    const res = await fetch("http://localhost:4005/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auth),
    });
    const data = await res.json();

    if(!res.ok) {
      console.log(data.message);
      setError(data.message)
    }
    if(res.ok) {
      console.log(data.message);
      setUser(data);
      setError("");
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/home")
    }
  };

  const handleLogout = async () => {
    try {
      setUser(null);
      localStorage.removeItem("user");
      setError("");
    } catch (error) {
      console.log(error);
      setError((error as ErrorMessage).message);
    }
  };

  const handleSignup = async (auth: IAuth) => {
    const res = await fetch("http://localhost:4005/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auth),
    });
    const data = await res.json();

    if(!res.ok) {
      console.log(data.message);
      setError(data.message)
    }
    if(res.ok) {
      console.log(data.message);
      setUser(data);
      setError("");
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/home")
    }
  };

  console.log(user);

  return (
    <AuthContext.Provider
      value={{ error,user, handleLogin, handleSignup, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
