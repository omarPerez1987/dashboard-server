import mongoose, { Schema } from "mongoose";

export interface AdminModel {
  email: string;
  name: string;
  password: string;
}

const adminSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const AdminSchema = mongoose.model<AdminModel>("Admins", adminSchema);
