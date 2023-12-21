import { Router, Request, Response } from "express";
import { ContactModel } from "../models/contactModel";
import {
  deleteContacts,
  getContacts,
  postContacts,
  putContacts,
} from "../services/contactService";

const router = Router();

router.get("/getAll", async (req: Request, res: Response) => {
  const contacts: ContactModel[] = await getContacts();
  res.send(contacts);
});

router.post("/post", async (req: Request, res: Response) => {
  const contact = await postContacts();
  res.json(contact);
});

router.put("/put/:id", async (req: Request, res: Response) => {
  const contact = await putContacts();
  res.send(contact);
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
  const contact = await deleteContacts();
  res.send(contact);
});

export default router;
