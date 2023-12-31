import express, { Request, Response } from "express";
import participantRoutes from "./routes/participant";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

export const app = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json());
app.use("/participants", participantRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("This is a test web page!");
});

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
