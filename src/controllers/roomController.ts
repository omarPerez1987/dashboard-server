import { Router, Request, Response } from "express";
import { RoomModel } from "../models/roomModel";
import {
  deleteRoom,
  getRoom,
  getRooms,
  postRoom,
  putRoom,
} from "../services/roomService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const rooms: RoomModel[] = await getRooms();
  res.json({ rooms });
});
router.get("/:id", async (req: Request, res: Response) => {
  const room = await getRoom(req, res);
  res.json({ room });
});

router.post("/:id", async (req: Request, res: Response) => {
  const room = await postRoom(req, res);
  res.json({ room });
});

router.put("/:id", async (req: Request, res: Response) => {
  const room = await putRoom(req, res);
  res.json({ room });
});

router.delete("/:id", async (req: Request, res: Response) => {
  const room = await deleteRoom(req, res);
  res.json({ room });
});

export default router;
