import bookingsData from '../JSON/bookings.json';
import { BookingModel } from '../models/bookingModel';

export const getBookings = async (): Promise<BookingModel[]> => {
  return bookingsData;
};
export const postBookings = async (): Promise<Object[]> => {
  return [{ success: "booking create successfully" }];
};
export const putBookings = async (): Promise<Object[]> => {
  return [{ success: "booking update successfully" }];
};
export const deleteBookings = async (): Promise<Object[]> => {
  return [{ success: "booking deleted successfully" }];
};
