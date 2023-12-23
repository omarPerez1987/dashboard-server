import { Router, Request, Response } from "express";
import { BookingModel } from "../models/bookingModel";
import {
  deleteBooking,
  getBooking,
  getBookings,
  postBooking,
  putBooking,
} from "../services/bookingService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const bookings: BookingModel[] = await getBookings();
  res.json({ bookings });
});

router.get("/:id", async (req: Request, res: Response) => {
  const booking = await getBooking(req, res);
  res.json({booking});
});

router.post("/:id", async (req: Request, res: Response) => {
  const booking = await postBooking(req, res);
  res.json({ booking });
});

router.put("/:id", async (req: Request, res: Response) => {
  const booking = await putBooking(req, res);
  res.json({ booking });
});

router.delete("/:id", async (req: Request, res: Response) => {
  const booking = await deleteBooking(req, res);
  res.json({ booking });
});

export default router;
