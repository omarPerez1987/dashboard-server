import { Request, Response } from "express";
import bookingsData from "../JSON/bookings.json";
import { BookingModel } from "../models/bookingModel";

export const getBookings = async (): Promise<BookingModel[]> => {
  return bookingsData;
};

export const getBooking = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "booking find successfully" }];
};

export const postBooking = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "booking create successfully" }];
};

export const putBooking = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "booking update successfully" }];
};

export const deleteBooking = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "booking deleted successfully" }];
};
