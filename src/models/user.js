import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//mongoose hooks
userSchema.pre("save", function (next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(9);
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

//mongoose method
userSchema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

//generate a new JWT TOKEN -->
userSchema.methods.generateJWT = function generate() {
  return jwt.sign({ id: this._id, email: this.email }, "twitter_secret", {
    expiresIn: "1h",
  });
};

const User = mongoose.model("User", userSchema);

export default User;
