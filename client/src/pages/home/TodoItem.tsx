import { ITodo } from "../../interfaces/interfaces"

interface TodoItemProps {
    todo:ITodo
    deleteTodoById: (id: string) => Promise<void>
    editTodoById: (todo: ITodo) => Promise<void>
}

const TodoItem = ({todo,deleteTodoById,editTodoById}:TodoItemProps) => {
  
  return (
    <div className='item'>
        <div className="textWrapper">
            <div className="title">{todo.title}</div>
            <div className="desc">{todo.description}</div>
        </div>
        <div className="buttons">
            <button className="btn btn-delete" onClick={() => deleteTodoById(todo._id)}>Delete</button>
            <button className="btn btn-edit">Edit</button>
        </div>
    </div>
  )
}

export default TodoItem