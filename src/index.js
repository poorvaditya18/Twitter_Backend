const express = require("express");

const connect = require("./config/database");

const TweetService = require("./services/tweet-service");

const app = express();

app.listen(3000, async () => {
  console.log("Server Started on 3000");
  await connect();
  console.log("MongoDB connected");

  let service = new TweetService();
  const tweet = await service.create({
    content: "my working #twitter #Excited",
  });
});
