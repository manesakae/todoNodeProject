const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
    task: {type: String, required: true},
    isCompleted: {type: Boolean, default: false}
},
{timestamps: true}
);
TodoSchema.virtual('id').get(function() {
    return this._id;
});
TodoSchema.set('toJSON', {
    virtuals: true
});
module.exports = mongoose.model("Todos", TodoSchema);