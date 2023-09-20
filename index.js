require('dotenv').config();

const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerDocument = require('./src/swagger/swagger.json');

const carRouter = require('./src/controller/CarController');
const userRouter = require('./src/controller/UserController');
const verifyToken = require('./src/middleware/verifyToken');

const app = express();
const route = express.Router()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const specs = swaggerJsdoc(swaggerDocument);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);

route.use('/car', verifyToken, carRouter)
route.use('/user', userRouter)

app.use(route)

app.listen(process.env.PORT || 3001, () => {
    console.log(`Express server initialized ${process.env.PORT || 3001}`);
});
