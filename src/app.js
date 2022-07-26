const express = require('express');

const PORT = 3000;

const app = express();
app.use(express.json()); // body-parser 내장된 것 사용

let fakeTodos = [];
let lastTodoId = 0;

app.get('/', (req, res) => {
  res.send({ data: 'home' });
});

app.get('/todos', (req, res) => {
  res.send({ data: fakeTodos });
});

app.post('/todo', (req, res) => {
  const { subject } = req.body;
  const newTodoId = lastTodoId + 1;
  lastTodoId += 1;
  const newTodo = { id: newTodoId, subject };
  fakeTodos = [...fakeTodos, newTodo];
  res.sendStatus(201);
});

app.delete('/todo/:id', (req, res) => {
  const { id } = req.params;
  fakeTodos = fakeTodos.filter((todo) => todo.id !== Number(id));
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on : ${PORT}`);
});
