import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    // on which model we are going to like
    onModel: {
      type: String,
      required: true,
      enum: ["Tweet", "Comment"], // either like on  a tweet or comment
    },
    likeable: {
      // whether you have liked a tweet or comment based on that we can store respective id's
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "onModel", //refPath
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);

export default Like;
