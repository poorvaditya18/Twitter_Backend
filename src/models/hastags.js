import mongoose from "mongoose";

// A tweet can have multiple hashtag
// A hashtag can have multiple tweets
// multiple tweetId belonging to a hashtag

const hashtagSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet",
    },
  ],
});

const Hashtag = mongoose.model("Hashtag", hashtagSchema);

export default Hashtag;
