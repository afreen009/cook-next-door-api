import express from "express";
import cors from "cors";
import "dotenv/config";
import userRoutes from "./routes/users.js";
import cooksRoutes from "./routes/cooks.js";
import foodItemRoutes from "./routes/menu-item.js";

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/", userRoutes);
app.use("/cooks", cooksRoutes);
app.use("/menu_tem", foodItemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
