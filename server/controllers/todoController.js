const Todo = require("../models/Todo");

// GET /api/todos
const getTodos = async (req, res) => {
  // Complete this to get all todo items
};

// POST /api/todos
const createTodo = async (req, res) => {
  try {
    // Complete this to add the entry in db
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/todos/:id
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!todo){
      // Complete this to return a relevant response
    }
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// DELETE /api/todos/:id
const deleteTodo = async (req, res) => {
  // Complete this to delete the selected todo item
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
