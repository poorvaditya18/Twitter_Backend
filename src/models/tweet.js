import mongoose from "mongoose";

//Schema
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet Cannot be more than 250 Characters"],
    },
    hashtags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hashtag",
      },
    ],
  },
  { timestamps: true } //createdAt updatedAt
);

// Tweet model will follow tweetschema
const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;
