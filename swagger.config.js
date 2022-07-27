module.exports = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'Todo API with express',
    },
  },
  apis: ['./src/routers/*.js', './swagger-schemas/*'],
};
