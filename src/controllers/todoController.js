let fakeTodos = [];
let lastTodoId = 0;

const getTodos = (req, res) => {
  res.send({ data: fakeTodos });
};

const createTodo = (req, res) => {
  const { subject } = req.body;
  const newTodoId = lastTodoId + 1;
  lastTodoId += 1;
  const newTodo = { id: newTodoId, subject };
  console.log(newTodo);
  fakeTodos = [...fakeTodos, newTodo];
  res.sendStatus(201);
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  fakeTodos = fakeTodos.filter((todo) => todo.id !== Number(id));
  res.sendStatus(204);
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
};
