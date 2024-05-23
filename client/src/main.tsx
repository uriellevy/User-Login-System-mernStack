import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/errorPage/ErrorPage.tsx";
import Login from "./pages/login/Login.tsx";
import Signup from "./pages/signup/Signup.tsx";
import Home from "./pages/home/Home.tsx";
import AuthProvider from "./context/AuthContext.tsx";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
        // element: <ProtectedRoute element={<Home />} redirectPath="/home" />,
      },
      {
        path: "/login",
        element: <Login />,
        // element: <ProtectedRoute element={<Login />} redirectPath="/home" />,
      },
      {
        path: "/signup",
        element: <Signup />,
        // element: <ProtectedRoute element={<Signup />} redirectPath="/home" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
