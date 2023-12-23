import { Router, Request, Response } from "express";
import { ContactModel } from "../models/contactModel";
import {
  deleteContact,
  getContact,
  getContacts,
  postContact,
  putContact,
} from "../services/contactService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const contacts: ContactModel[] = await getContacts();
  res.json({ contacts });
});
router.get("/:id", async (req: Request, res: Response) => {
  const contact = await getContact(req, res);
  res.json({ contact });
});

router.post("/:id", async (req: Request, res: Response) => {
  const contact = await postContact(req, res);
  res.json({ contact });
});

router.put("/:id", async (req: Request, res: Response) => {
  const contact = await putContact(req, res);
  res.json({ contact });
});

router.delete("/:id", async (req: Request, res: Response) => {
  const contact = await deleteContact(req, res);
  res.json({ contact });
});

export default router;
