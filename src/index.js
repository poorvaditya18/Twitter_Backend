import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/database.js";

import TweetService from "./services/tweet-service.js";
import ApiRoutes from "./routes/index.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", ApiRoutes);

app.listen(3000, async () => {
  console.log("Server Started on 3000");
  await connect();
  console.log("MongoDB connected");

  // let ser = new TweetService();
  // await ser.create({ content: "New #LOWERCASE #TWEET" });
});
