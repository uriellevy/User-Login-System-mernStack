// components/ProtectedRoute.tsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.tsx";
import { AuthContextType } from "../../interfaces/interfaces.ts";

interface ProtectedRouteProps {
  element: JSX.Element;
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, redirectPath = "/login" }) => {
  const {user} = useContext(AuthContext) as AuthContextType;

  return user ? element : <Navigate to={redirectPath} />;
};

export default ProtectedRoute;