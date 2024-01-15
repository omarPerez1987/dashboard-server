import express, { Express } from "express";
import cors from "cors";
import routes from "./routes";
import { connectionSQL } from "./config/sql";
import { errorHandler } from "./middleware/errorHandler";


const app: Express = express();

// HABILITAR CORS
app.use(cors());

connectionSQL();

app.use(express.json());

// Routes
// app.use(routes);

app.use(errorHandler);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
