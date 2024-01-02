import { Request, Response } from "express";
import contactsData from "../JSON/contact.json";
import { ContactModel, ContactSchema } from "../models/contactModel";

export const getContacts = async (): Promise<ContactModel[]> => {
  try {
    return await ContactSchema.find().exec();
  } catch (error) {
    console.error("Error when obtaining Contacts:", error);
    throw error;
  }
};

export const getContact = async (id: string): Promise<ContactModel | null> => {
  try {
    return await ContactSchema.findById(id).exec();
  } catch (error) {
    console.error("Error when obtaining contact:", error);
    throw error;
  }
};

export const postContact = async (
  body: ContactModel
): Promise<ContactModel> => {
  try {
    const contact = new ContactSchema(body);
    return await contact.save();
  } catch (error) {
    console.error("Error contact were not saved:", error);
    throw error;
  }
};

export const putContact = async (
  body: ContactModel
): Promise<ContactModel | null> => {
  try {
    return await ContactSchema.findByIdAndUpdate(body.id, body);
  } catch (error) {
    console.error("Error contact were not updated:", error);
    throw error;
  }
};

export const deleteContact = async (
  id: string
): Promise<ContactModel | null> => {
  try {
    return await ContactSchema.findOneAndDelete({ id: id });
  } catch (error) {
    console.error("Error al eliminar la reserva:", error);
    throw error;
  }
};
