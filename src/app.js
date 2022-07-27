const express = require('express');
const swagger = require('../swagger');
const todoRouter = require('./routers/todoRouter');

const PORT = 3000;

const app = express();
app.use(express.json()); // body-parser 내장된 것 사용
app.use('/api-docs', swagger);

app.get('/', (req, res) => {
  res.send({ data: 'home' });
});

app.use('/todo', todoRouter);

app.listen(PORT, () => {
  console.log(`✅ Server listening on : ${PORT}`);
});
