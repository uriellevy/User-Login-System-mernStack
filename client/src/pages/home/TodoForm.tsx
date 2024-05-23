import { FormEvent } from "react";
import { INewTodo } from "../../interfaces/interfaces";
import useForm from "../../hooks/useForm";

interface TodoFormProps {
  createTodo: (todo: INewTodo) => Promise<void>
}

const TodoForm = ({createTodo}:TodoFormProps) => {
  const {values, handleChange} = useForm<INewTodo>({title:"", description: ""});

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTodo(values);
    }

  return (
    <div className='todoFormContainer' >
        <form className='formContainer' onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder='Enter title...' onChange={handleChange} value={values.title}/>
            <input type="text" name="description" placeholder='Enter title...' onChange={handleChange} value={values.description}/>
            <input type="submit" value="Add"/>
        </form>
    </div>
  )
}

export default TodoForm