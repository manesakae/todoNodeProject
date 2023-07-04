const express = require("express");
const router = express.Router();
const {getAllTodos, addTodo, updateTodo, deleteTodo} = require("../controllers/todoController");

router.get('', getAllTodos);
router.post('', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports=router;