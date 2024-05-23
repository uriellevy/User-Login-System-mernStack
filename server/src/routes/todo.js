import express from 'express';
import { getAllTodos, createTodo, deleteAllTodos,deleteTodoById,updateTodo } from '../controllers/todo.js';
import {requireAuth} from "../middleware/requireAuth.js"

const router = express.Router();

//require auth for all todo routes
router.use(requireAuth);

router.get('/', getAllTodos);
router.post('/', createTodo);
router.delete('/', deleteAllTodos);
router.delete('/:id', deleteTodoById);
router.put('/:id', updateTodo);

export default router;