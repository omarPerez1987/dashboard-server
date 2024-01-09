import { Router, Request, Response, NextFunction } from "express";
import { BookingModel } from "../models/bookingModel";
import {
  deleteBooking,
  getBooking,
  getBookings,
  postBooking,
  putBooking,
} from "../services/bookingService";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookings: BookingModel[] = await getBookings();
    res.json({ bookings });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const booking = await getBooking(id);
    res.json({ booking });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const booking = await postBooking(req.body);
    res.json({ success: "Booking create success", data: booking });
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const booking = await putBooking(req.body);
    res.json({ success: "Booking successfully updated", data: booking });
  } catch (error) {
    next(error);
  }
});

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const _id = req.params._id;
      const booking = await deleteBooking(_id);
      res.json({ success: "Booking successfully deleted", data: booking });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
