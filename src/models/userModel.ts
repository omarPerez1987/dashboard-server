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
}

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  photo: String,
  name: String,
  email: String,
  phone: String,
  description: String,
  status: String,
  startDate: String,
});

export const UserSchema = mongoose.model<UserModel>("users", userSchema);
