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
    error: string
    user: IUser | null
    handleLogin: (auth: IAuth) => Promise<boolean | undefined>
    handleSignup: (auth: IAuth) => Promise<boolean | undefined>
    handleLogout: () => Promise<void>
};


export interface ErrorMessage {
  message: string
}

export interface IUser {
  email: string
  token: string
}