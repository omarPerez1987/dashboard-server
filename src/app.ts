import express, { Express } from "express";
import routes from "./routes";


const app: Express = express();

app.use(express.json());

// Routes
app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
