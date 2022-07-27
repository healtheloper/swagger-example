const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'Todo API with express',
    },
    host: 'localhost:3000',
    basePath: '/',
  },
  apis: ['./src/app.js', './src/swagger/*'],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
