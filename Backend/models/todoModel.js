import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todoIndex: {
    type: Number,
    default: 0,
  },

  priorityIndex: {
    type: Number,
    default: 0,
  },

  name: {
    type: String,
  },

  isCompleted: {
    type: Boolean,
    default: false,
  },

  isCanceled: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("TodoModel", todoSchema);

export default TodoModel;
