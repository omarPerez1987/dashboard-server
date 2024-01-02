import mongoose, { Schema } from "mongoose";

export interface UserModel {
  photo: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  status: string;
  startDate: string;
}

const userSchema = new Schema({
  photo: String,
  name: String,
  email: String,
  phone: String,
  description: String,
  status: String,
  startDate: String,
});

export const UserSchema = mongoose.model<UserModel>("Booking", userSchema);
