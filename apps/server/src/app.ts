import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // mila an'io raha misaraka front-back
import verifyJWT from './middlewares/jwt.middleware.js';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerOptions from './config/swagger.js';

dotenv.config();

const app = express();
const specs = swaggerJsDoc(swaggerOptions); // Setup Swagger documentation
app.use(express.json()); // Middleware to parse JSON requests
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs)); // Serve Swagger UI at /docs
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    message:
      'Hello World! My Server is Running Smoothly. Welcome to the Express API!',
  });
});

app.use(verifyJWT); // Middleware to verify JWT token

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running in https://localhost/${PORT}`);
});
// Export the app for testing purposes
export default app;
