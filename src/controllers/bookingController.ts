import { Request, Response } from 'express';
import { BookingModel } from '../models/bookingModel';

export const getAllBookings = (req: Request, res: Response) => {
  const bookings: BookingModel[] = [];
  res.send('hola desde controler bookings')
  res.json(bookings);
};