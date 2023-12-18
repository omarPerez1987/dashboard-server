import contactsData from "../JSON/contact.json";
import { ContactModel } from "../models/contactModel";

export const getContacts = async (): Promise<ContactModel[]> => {
  return contactsData;
};
export const postContacts = async (): Promise<Object[]> => {
  return [{ success: "contacts create successfully" }];
};
export const putContacts = async (): Promise<Object[]> => {
  return [{ success: "contacts update successfully" }];
};
export const deleteContacts = async (): Promise<Object[]> => {
  return [{ success: "contacts deleted successfully" }];
};
