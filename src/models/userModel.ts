import mongoose, { Schema } from "mongoose";

export interface UserModel {
  _id: mongoose.Types.ObjectId;
  photo: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  status: string;
  startDate: string;
  position: string;
  password: string;
}

const userSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  photo: String,
  name: String,
  email: String,
  phone: String,
  description: String,
  status: String,
  startDate: String,
  position: String,
  password: String
});

export const UserSchema = mongoose.model<UserModel>("users", userSchema);
