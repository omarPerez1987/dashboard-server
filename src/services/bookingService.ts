import { BookingModel, BookingSchema } from "../models/bookingModel";
import { Document } from "mongoose";

export const getBookings = async (): Promise<BookingModel[]> => {
  try {
    return await BookingSchema.find().exec();
  } catch (error) {
    console.error("Error when obtaining bookings:", error);
    throw error;
  }
};

export const getBooking = async (id: string): Promise<BookingModel | null> => {
  try {
    return await BookingSchema.findById(id).exec();
  } catch (error) {
    console.error("Error when obtaining booking:", error);
    throw error;
  }
};

export const postBooking = async (
  body: BookingModel
): Promise<BookingModel> => {
  try {
    const booking = new BookingSchema(body);
    return await booking.save();
  } catch (error) {
    console.error("Error booking were not saved:", error);
    throw error;
  }
};

export const putBooking = async (
  body: BookingModel
): Promise<BookingModel | null> => {
  try {
    return await BookingSchema.findByIdAndUpdate(body.id, body);
  } catch (error) {
    console.error("Error booking were not updated:", error);
    throw error;
  }
};

export const deleteBooking = async (
  id: string
): Promise<Document<BookingModel> | null> => {
  try {
    return await BookingSchema.findOneAndDelete({ id: id });
  } catch (error) {
    console.error("Error al eliminar la reserva:", error);
    throw error;
  }
};
