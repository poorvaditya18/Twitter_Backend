const mongoose = require("mongoose");

//Schema
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet Cannot be more than 250 Characters"],
    },
  },
  { timestamps: true }
);

// Tweet model will follow tweetschema
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
