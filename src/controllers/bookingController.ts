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
    const bookings = await getBookings();
    res.json({ data: bookings });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const booking = await getBooking(id);
    res.json({ data: booking });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const booking = await postBooking();
    res.json({ data: booking });
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const booking = await putBooking(req.body);
    res.json({ data: booking });
  } catch (error) {
    next(error);
  }
});

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const booking = await deleteBooking(id);
      res.json({ data: booking });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
