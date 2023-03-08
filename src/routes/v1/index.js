import express from "express";

import { createTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
const router = express.Router();

//create tweet
router.post("/tweets", createTweet);

// toggle like 
router.post("/like/toggle", toggleLike);

export default router;
