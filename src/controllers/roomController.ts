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
    const rooms: RoomModel[] = await getRooms();
    res.json({ rooms });
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const room = await getRoom(id);
    res.json({ room });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const room = await postRoom(req.body);
    res.json({ success: "Room create success", data: room });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const room = await putRoom(req.body);
    res.json({ success: "Room successfully updated", data: room });
  } catch (error) {
    next(error);
  }
});

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const room = await deleteRoom(id);
      res.json({ success: "Room successfully deleted", data: room });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
