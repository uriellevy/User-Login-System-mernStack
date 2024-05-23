import Todo from '../models/todo.js';

export const getAllTodos = async (req, res) => {
  const user_id = req.user._id;

  try {
    const todos = await Todo.find({user_id}).sort({createdAt: -1});
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createTodo = async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    user_id: req.user._id,
  });

  try {
    const newTodo = await todo.save();
    const updatedTodos = await Todo.find({user_id:req.user._id});
    res.status(201).json({message: "new todo added successfully", data:{newTodo:newTodo, todos: updatedTodos}});
  } catch (err) {
    res.status(400).json({ message: err.message});
  }
};

export const deleteAllTodos = async (req,res) => {
  const user_id = req.user._id;
    try {
        await Todo.deleteMany({user_id});
        const todos = await Todo.find({user_id});
        res.status(200).json({message:"All todos deleted successfully", data:{todos}});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteTodoById = async (req,res) => {
    const {id} = req.params;
    const user_id = req.user._id;

    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if(!deletedTodo) return res.status(404).json({message:"todo not found"});
        
        const updatedTodos = await Todo.find({user_id});

        res.status(200).json({message: `todo with id ${id} deleted successfully`, data: {deletedTodo,todos:updatedTodos }});
    } catch (error) {
        res.status(500).json({message:err.message});
    }
}

export const updateTodo = async (req,res) => {
    const {id} = req.params;
    const {title,description, completed} = req.body;
    const user_id = req.user._id;

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id,{title,description,completed}, {new: true});
        if(!updateTodo) return res.status(404).json({message:"todo not found"});

        const todos = await Todo.find({user_id});
        res.status(200).json({message: "todo updated successfully", data: {updatedTodo,todos}})
    } catch (error) {
        
    }
}