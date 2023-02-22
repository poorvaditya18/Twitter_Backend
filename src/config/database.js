import mongoose from "mongoose";

//connection
export const connect = async () => {
  await mongoose.connect("mongodb://localhost/twitter_dev");
};
