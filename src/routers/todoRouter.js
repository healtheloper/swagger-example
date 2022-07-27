const express = require('express');
const {
  getTodos,
  createTodo,
  deleteTodo,
} = require('../controllers/todoController');

const todoRouter = express.Router();

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
todoRouter.get('/', getTodos);

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
todoRouter.post('/', createTodo);

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
todoRouter.delete('/:id', deleteTodo);

module.exports = todoRouter;
