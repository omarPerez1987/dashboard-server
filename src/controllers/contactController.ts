import { Request, Response } from 'express';
import { ContactModel } from '../models/contactModel';

export const getAllContacts = (req: Request, res: Response) => {
  const contacts: ContactModel[] = [];
  res.json(contacts);
};