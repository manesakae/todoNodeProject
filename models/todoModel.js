const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
    task: {type: String, required: true},
    isCompleted: {type: Boolean, default: false}
},
{timestamps: true}
);

module.exports = mongoose.model("Todos", TodoSchema);