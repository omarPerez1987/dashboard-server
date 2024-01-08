import mongoose, { Schema } from "mongoose";

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
  room?: string;
  price?: number;
  description?: string;
  facilities?: Array<string>;
  photo?: string | null;
  status?: string;
}

const bookingSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
