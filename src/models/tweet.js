import mongoose from "mongoose";

//Schema
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet Cannot be more than 250 Characters"],
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    //images url -> for s3 storage
    image: {
      type: String,
    },
  },
  { timestamps: true } //createdAt updatedAt
);

// Tweet model will follow tweetschema
const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;
