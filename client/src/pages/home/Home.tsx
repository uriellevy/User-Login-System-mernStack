import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../context/TodosContext";
import { AuthContextType, TodoContextType } from "../../interfaces/interfaces";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const {
    todos,
    getTodos,
    deleteAllTodos,
    deleteTodoById,
    editTodoById,
    createTodo,
  } = useContext(TodoContext) as TodoContextType;
  const {user} = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    getTodos();
  }, [user]);
  console.log(todos);

  return (
    <div className="homeContainer">
      <TodoForm createTodo={createTodo} />
      <TodoList
        todos={todos}
        deleteAllTodos={deleteAllTodos}
        deleteTodoById={deleteTodoById}
        editTodoById={editTodoById}
      />
    </div>
  );
};

export default Home;
