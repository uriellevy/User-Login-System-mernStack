import React from 'react'
import { ITodo } from '../../interfaces/interfaces'
import TodoItem from './TodoItem'

interface TodoListProps {
    todos: ITodo[]
    deleteAllTodos: () => Promise<void>
    deleteTodoById: (id: string) => Promise<void>
    editTodoById: (todo: ITodo) => Promise<void>
}

const TodoList = ({todos, deleteAllTodos,deleteTodoById,editTodoById}:TodoListProps) => {
  return (
    <div className='listContainer'>
        <button className='btn btn-delete-all' onClick={deleteAllTodos}>Delete All</button>
        {todos.map((todo) => (
            <TodoItem 
            todo={todo}
            deleteTodoById={deleteTodoById}
            editTodoById={editTodoById}
            key={todo._id}
             />
        ))}
    </div>
  )
}

export default TodoList