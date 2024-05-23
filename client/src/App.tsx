import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import AuthProvider from "./context/AuthContext";
import TodoProvider from "./context/TodosContext";

function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <div>
          <NavBar />
          <Outlet />
        </div>
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;
