const express = require('express');
const { swaggerUi, specs } = require('./swagger');

const PORT = 3000;

const app = express();
app.use(express.json()); // body-parser 내장된 것 사용
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

let fakeTodos = [];
let lastTodoId = 0;

app.get('/', (req, res) => {
  res.send({ data: 'home' });
});

/**
 * @swagger
 *  /todo:
 *    get:
 *      summary: "전체 Todo 검색"
 *      tags: [Todo]
 *      responses:
 *        "200":
 *          description: 전체 Todo 검색
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/Todo'
 */
app.get('/todo', (req, res) => {
  res.send({ data: fakeTodos });
});

/**
 * @swagger
 *  /todo:
 *    post:
 *      summary: "Todo 생성"
 *      tags: [Todo]
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateTodo'
 *      responses:
 *        "201":
 *          description: 새로운 Todo 생성
 */
app.post('/todo', (req, res) => {
  const { subject } = req.body;
  const newTodoId = lastTodoId + 1;
  lastTodoId += 1;
  const newTodo = { id: newTodoId, subject };
  fakeTodos = [...fakeTodos, newTodo];
  res.sendStatus(201);
});

/**
 * @swagger
 *  /todo/{id}:
 *    delete:
 *      summary: "특정 Todo 삭제"
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *      tags: [Todo]
 *      responses:
 *        "204":
 *          description: id 를 통해 특정 Todo 삭제
 */
app.delete('/todo/:id', (req, res) => {
  const { id } = req.params;
  fakeTodos = fakeTodos.filter((todo) => todo.id !== Number(id));
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on : ${PORT}`);
});
