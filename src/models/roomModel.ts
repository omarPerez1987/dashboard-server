import mongoose, { Schema } from "mongoose";

export interface RoomModel {
  id: string;
  photo: string | null;
  room: string;
  bed: string;
  facilities: string[];
  description: string;
  price: number;
  discount: number;
  cancel: string;
  status: string;
}

const roomSchema = new Schema({
  id: String,
  photo: String || null,
  room: String,
  bed: String,
  facilities: Array,
  description: String,
  price: Number,
  discount: Number,
  cancel: String,
  status: String,
});

export const RoomSchema = mongoose.model<RoomModel>("rooms", roomSchema);
