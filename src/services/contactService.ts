import { Request, Response } from "express";
import contactsData from "../JSON/contact.json";
import { ContactModel } from "../models/contactModel";

export const getContacts = async (): Promise<ContactModel[]> => {
  return contactsData;
};
export const getContact = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "contacts find successfully" }];
};
export const postContact = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "contacts create successfully" }];
};
export const putContact = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "contacts update successfully" }];
};
export const deleteContact = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "contacts deleted successfully" }];
};
