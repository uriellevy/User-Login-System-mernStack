export interface ITodo {
  _id: string
  title: string
  description:string
  isCompleted?: boolean
}

export interface INewTodo {
  title: string
  description:string
}

export type TodoContextType = {
  todos: ITodo[]
  getTodos: () => Promise<void>
  createTodo: (todo: INewTodo) => Promise<void>
  deleteAllTodos: () => Promise<void>
  deleteTodoById: (id: string) => Promise<void>
  editTodoById: (todo: ITodo) => Promise<void>
};

export interface IAuth {
  email: string,
  password: string
}
export type AuthContextType = {
    auth: IAuth;
    error: string
    handleLogin: (auth: IAuth) => Promise<void>
    handleSignup: (auth: IAuth) => Promise<void>
    handleLogout: () => Promise<void>
};


export interface ErrorMessage {
  message: string
}