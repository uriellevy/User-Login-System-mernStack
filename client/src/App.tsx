import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import TodoProvider from "./context/TodosContext";

function App() {
  return (
      <TodoProvider>
        <div>
          <NavBar />
          <Outlet />
        </div>
      </TodoProvider>
  );
}

export default App;
