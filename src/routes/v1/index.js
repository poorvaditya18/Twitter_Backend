import express from "express";

import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";

import { createComment } from "../../controllers/comment-controller.js";
import { signup } from "../../controllers/auth-controller.js";

const router = express.Router();

//create tweet
router.post("/tweets", createTweet);

router.get("/tweets/:id", getTweet);

// toggle like
router.post("/like/toggle", toggleLike);

router.post("/comments", createComment);

router.post("/signup", signup);

export default router;
