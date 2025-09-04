import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();

const spec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: { title: "API", version: "1.0.0" }
  },
  apis: []
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));

app.listen(3000, () => console.log("Swagger UI at http://localhost:3000/docs"));
