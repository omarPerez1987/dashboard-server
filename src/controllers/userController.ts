import { Router, Request, Response } from "express";
import { UserModel } from "../models/userModel";
import { deleteUsers, getUsers, postUsers, putUsers } from "../services/userService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const user: UserModel[] = await getUsers();
  res.send(user);
});

router.post("/post", async (req: Request, res: Response) => {
  const user = await postUsers();
  res.json(user);
});

router.put("/put/:id", async (req: Request, res: Response) => {
  const user = await putUsers();
  res.send(user);
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
  const user = await deleteUsers();
  res.send(user);
});

export default router;
