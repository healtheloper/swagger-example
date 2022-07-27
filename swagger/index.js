const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = require(path.resolve(process.env.PWD, 'swagger.config.js'));
const specs = swaggereJsdoc(options);

const swagger = [swaggerUi.serve, swaggerUi.setup(specs)];

module.exports = swagger;
