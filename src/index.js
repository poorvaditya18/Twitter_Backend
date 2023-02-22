import express from "express";

import { connect } from "./config/database.js";

import TweetService from "./services/tweet-service.js";

const app = express();

app.listen(3000, async () => {
  console.log("Server Started on 3000");
  await connect();
  console.log("MongoDB connected");

  let ser = new TweetService();
  await ser.create({ content: "New #LOWERCASE #TWEET" });
});
