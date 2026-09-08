const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'RH_Management API',
      version: '1.0.0',
      description: 'API documentation for RH_Management application',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'API Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Adjust the path to your route files
};

export default swaggerOptions;

// export const setupSwagger = (app: Express): void => {
//     app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// };
