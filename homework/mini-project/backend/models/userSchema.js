import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  personal: String,
  prefer: String,
  phone: String,
  og: Object,
});

export const User = mongoose.model("user", UserSchema);
