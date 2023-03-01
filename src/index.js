import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/database.js";

import TweetService from "./services/tweet-service.js";
import ApiRoutes from "./routes/index.js";

import { UserRepository, TweetRepository } from "./repository/index.js";
import LikeService from "./services/like-service.js";

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

  const userRepo = new UserRepository();
  const tweetRepo = new TweetRepository();
  const tweets = await tweetRepo.getAll(0, 10);
  // console.log(tweets);
  // const user = await userRepo.create({
  //   email: "aditya@gmail.com",
  //   password: "1234",
  //   name: "Aditya",
  // });
  const users = await userRepo.getAll();
  const likeService = new LikeService();
  await likeService.toggleLike(tweets[0].id, "Tweet", users[0].id);
});
