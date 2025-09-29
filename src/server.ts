import cors from "cors";
import express from "express";
import { ThrowError } from "./middlewares/ThrowError";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(ThrowError);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server has been started at: ${PORT}`));
