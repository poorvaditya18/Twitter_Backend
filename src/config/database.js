const mongoose = require("mongoose");

//connection
const connect = async () => {
  await mongoose.connect("mongodb://localhost/twitter_dev");
};

module.exports = connect;
