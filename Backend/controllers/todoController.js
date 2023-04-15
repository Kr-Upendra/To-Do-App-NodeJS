import TodoModel from "../models/todoModel.js";

const getAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find().sort({ priorityIndex: 1 });
    res.status(200).json({
      status: "success",
      message: "successfully got all todos!",
      totalTodos: todos.length,
      todos: todos,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Some error occured!",
      error: err,
    });
  }
};

const getSingleTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await TodoModel.findById(id);
    res.status(200).json({
      status: "success",
      message: "successfully get the todo that you want!",
      todo: todo,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Some error occured!",
      error: err,
    });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = await TodoModel.create(req.body);
    res.status(201).json({
      status: "success",
      message: "todo created successfully!",
      Todo: todo,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Some error occured!",
      error: err,
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      status: "success",
      message: "todo updated successfully!",
      todo: updatedTodo,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Some error occured!",
      error: err,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoToDelete = await TodoModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "todo deleted successfully!",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Some error occured!",
      error: err,
    });
  }
};

export default {
  getAllTodos,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
