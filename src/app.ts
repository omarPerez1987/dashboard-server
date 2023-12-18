import express, { Express, Request, Response } from "express";
import routes from './routes';

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

// Routes
app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
