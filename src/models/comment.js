import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    onModel: {
      type: String,
      required: true,
      enum: ["Tweet", "Comment"], // either like on  a tweet or comment
    },
    commentable: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "onModel", //refPath
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
