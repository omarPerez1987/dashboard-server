import { Router, Request, Response } from "express";
import { ContactModel } from "../models/contactModel";
import {
  deleteContacts,
  getContacts,
  postContacts,
  putContacts,
} from "../services/contactService";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/", authenticateToken,async (req: Request, res: Response) => {
  const contacts: ContactModel[] = await getContacts();
  res.send(contacts);
});

router.post("/post",authenticateToken, async (req: Request, res: Response) => {
  const contact = await postContacts();
  res.json(contact);
});

router.put("/put/:id",authenticateToken, async (req: Request, res: Response) => {
  const contact = await putContacts();
  res.send(contact);
});

router.delete("/delete/:id",authenticateToken, async (req: Request, res: Response) => {
  const contact = await deleteContacts();
  res.send(contact);
});

export default router;
