import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { adminRouter } from "./Routes/AdminRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
  })
);

// Handle preflight requests
app.options(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Alumni Server!");
});

app.use("/auth", adminRouter);

app.use("/Public", express.static("Public"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
