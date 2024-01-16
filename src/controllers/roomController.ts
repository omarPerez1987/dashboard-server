import { Router, Request, Response, NextFunction } from "express";
import { RoomModel } from "../models/roomModel";
import {
  deleteRoom,
  getRoom,
  getRooms,
  postRoom,
  putRoom,
} from "../services/roomService";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const rooms = await getRooms();
    res.json({ data: rooms });
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const room = await getRoom(id);
    res.json({ data: room });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const room = await postRoom();
    res.json({ data: room });
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const room = await putRoom(req.body);
    res.json({ data: room });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const room = await deleteRoom(id);
    res.json({ data: room });
  } catch (error) {
    next(error);
  }
});

export default router;
