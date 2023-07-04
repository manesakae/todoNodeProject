const todoModel = require("../models/todoModel");

module.exports.getAllTodos = async (req, res, next) => {
    try {
        const results = await todoModel.find();
        res.json({success: true, results}); 
    } catch (error) {
        next(error);
    }
}

module.exports.addTodo = async (req, res, next) => {
    try {
        let todo = req.body;
        const results = await todoModel.create(todo);
        res.json({success: true, results}); 
    } catch (error) {
        next(error);
    }
}

module.exports.updateTodo = async (req, res, next) => {
    try {
        let todo = req.body;
        const todo_id = req.param;

        const results = await todoModel.updateOne(
            {id: todo_id},
            {
                $set: todo
            }
            );
        res.json({success: true, results}); 
    } catch (error) {
        next(error);
    }
}