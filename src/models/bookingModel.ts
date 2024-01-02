import mongoose, { Schema } from "mongoose";

export interface BookingModel {
    name: string;
    id: string;
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
    facilities?: Array<string> ;
    photo?: string | null;
    status?: string;
  }

  const bookingSchema = new Schema ({
    name: String,
    id: String,
    orderDate: String,
    orderTime: String,
    checkin: String,
    checkinTime: String,
    checkout: String,
    checkoutTime: String,
    notes: String,
    idRoom: String,
    check: String
  })

  export const BookingSchema = mongoose.model<BookingModel>('Booking', bookingSchema)