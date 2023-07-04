const express = require("express");
const router = express.Router();
const {getAllTodos, addTodo, updateTodo} = require("../controllers/todoController");

router.get('', getAllTodos);
router.post('', addTodo);
router.put('/:id', updateTodo);

module.exports=router;