import express from 'express';
import mainRoutes from "./routes/routes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";



dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 7777;


app.use("/api/data", mainRoutes);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port : ${PORT} --FULL THROTTLE--`)
    )
  )