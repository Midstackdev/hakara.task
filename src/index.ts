import express, { Application, Request, Response } from "express";
import errorMiddleware from "./middlewares/error";
import config, { connectDB } from "./config";
import routes from "./routes";
import cors from "cors";

const PORT = config.port;

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.post("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello from post",
    data: req.body,
  });
});
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World",
  });
});

app.use(errorMiddleware);

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message: "Not found!, read the API documentation to find your way",
  });
});

export const server = app.listen(PORT, () => {
  connectDB();
  console.log(`Server is listening on port:${PORT}`);
});

export default app;
