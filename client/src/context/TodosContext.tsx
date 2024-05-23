import * as React from 'react';
import { TodoContextType, ITodo, INewTodo } from '../interfaces/interfaces';

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [todos,setTodos] = React.useState<ITodo[]>([]);

    const getTodos = async () => {
        try {
            const res = await fetch("http://localhost:4005/api/todos");
            const data: ITodo[] = await res.json();
            setTodos(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    const createTodo = async (todo: INewTodo) => {
        if(!todo.title || !todo.description) return;

        try {
            const res = await fetch("http://localhost:4005/api/todos", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
            });
            const data = await res.json();
            setTodos(data.data.todos);
        } catch (error) {
            console.log(error);
        }
    } 

    const deleteAllTodos = async () => {
        try {
            const res = await fetch("http://localhost:4005/api/todos", {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            setTodos(data.data.todos);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTodoById = async (id:string) => {
        try {
            const res = await fetch(`http://localhost:4005/api/todos/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            setTodos(data.data.todos);
        } catch (error) {
            console.log(error);
        }
    }

    const editTodoById = async (todo:ITodo) => {
        try {
            const res = await fetch(`http://localhost:4005/api/todos/${todo._id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
            });
            const data = await res.json();
            setTodos(data.data.todos);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TodoContext.Provider value={{todos, getTodos, createTodo,deleteAllTodos,deleteTodoById,editTodoById}}>
          {children}
        </TodoContext.Provider>
      );
}

export default TodoProvider;