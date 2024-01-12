import mongoose, { Schema } from "mongoose";
import { RoomModel } from "./roomModel";

export interface BookingModel {
  _id: mongoose.Types.ObjectId;
  name: string;
  orderDate: string;
  orderTime: string;
  checkin: string;
  checkinTime: string;
  checkout: string;
  checkoutTime: string;
  notes: string;
  idRoom: string;
  check: string;
  dataRoom?: RoomModel | null
}

const bookingSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  name: String,
  orderDate: String,
  orderTime: String,
  checkin: String,
  checkinTime: String,
  checkout: String,
  checkoutTime: String,
  notes: String,
  idRoom: String,
  check: String,
});

export const BookingSchema = mongoose.model<BookingModel>(
  "bookings",
  bookingSchema
);
