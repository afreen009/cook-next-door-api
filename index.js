import express from "express";
import cors from "cors";
import "dotenv/config";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 8081;


//Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

// Routes
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
