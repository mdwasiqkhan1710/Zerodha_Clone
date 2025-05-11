const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const UsersSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
    unique: true,
  },
  phonenumber: {
    type: String,
    required: [true, "Your phone number is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UsersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Only hash if password changes

  try {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  } catch (err) {
    next(err); // Handle errors
  }
});

module.exports = { UsersSchema };
