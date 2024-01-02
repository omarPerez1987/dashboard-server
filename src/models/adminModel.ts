import mongoose, { Schema } from "mongoose";

export interface AdminModel {
  email: string;
  name: string;
  password: string;
}

const adminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: String,
});

export const AdminSchema = mongoose.model<AdminModel>("Admin", adminSchema);
