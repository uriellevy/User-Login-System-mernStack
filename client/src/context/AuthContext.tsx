import * as React from "react";
import { AuthContextType, ErrorMessage, IAuth } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = React.useState<IAuth>({ email: "", password: "" });
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

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
      setAuth(data);
      setError("");
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/home")
    }
  };

  const handleLogout = async () => {
    try {
      setAuth({ email: "", password: "" });
      localStorage.clear();
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
      setAuth(data);
      setError("");
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/home")
    }
  };

  return (
    <AuthContext.Provider
      value={{ auth, error, handleLogin, handleSignup, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
