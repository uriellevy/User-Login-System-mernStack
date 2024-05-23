import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../context/TodosContext";
import { TodoContextType } from "../../interfaces/interfaces";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Home = () => {
  const {
    todos,
    getTodos,
    deleteAllTodos,
    deleteTodoById,
    editTodoById,
    createTodo,
  } = useContext(TodoContext) as TodoContextType;

  useEffect(() => {
    getTodos();
  }, []);
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
