import { Router, Request, Response, NextFunction } from "express";
import { UserModel } from "../models/userModel";
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from "../services/userService";
import { generateFakeUser } from "../seeds/usersSeed";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users: UserModel[] = await getUsers();
    res.json({ data: users });
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id;
    const user = await getUser(_id);
    res.json({ data: user });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await postUser(req.body);
    // const user = await postUser(generateFakeUser())
    res.json({ data: user });
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await putUser(req.body);
    res.json({ data: user });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id
    const user = await deleteUser(_id);
    res.json({ data: user });
  } catch (error) {
    next(error);
  }
});

export default router;
