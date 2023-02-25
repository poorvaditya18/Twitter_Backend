import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    // on which model we are going to like
    onModel: {
      type: String,
      required: true,
      enum: ["Tweet", "Comment"],
    },
  },
  { timestamps: true }
);
