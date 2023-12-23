import { Router, Request, Response } from "express";
import { UserModel } from "../models/userModel";
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from "../services/userService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const users: UserModel[] = await getUsers();
  res.json({ users });
});
router.get("/:id", async (req: Request, res: Response) => {
  const user = await getUser(req, res);
  res.json({ user });
});

router.post("/:id", async (req: Request, res: Response) => {
  const user = await postUser(req, res);
  res.json({ user });
});

router.put("/:id", async (req: Request, res: Response) => {
  const user = await putUser(req, res);
  res.json({ user });
});

router.delete("/:id", async (req: Request, res: Response) => {
  const user = await deleteUser(req, res);
  res.json({ user });
});

export default router;
