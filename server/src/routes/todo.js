import express from 'express';
import { getAllTodos, createTodo, deleteAllTodos,deleteTodoById,updateTodo } from '../controllers/todo.js';

const router = express.Router();

router.get('/', getAllTodos);
router.post('/', createTodo);
router.delete('/', deleteAllTodos);
router.delete('/:id', deleteTodoById);
router.put('/:id', updateTodo);

export default router;