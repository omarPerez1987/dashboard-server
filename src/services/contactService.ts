import { ContactModel, ContactSchema } from "../models/contactModel";
import { generateFakeContact } from "../seeds/contactsSeed";

export const getContacts = async (): Promise<ContactModel[]> => {
  try {
    return await ContactSchema.find().exec();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener los contactos en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const getContact = async (_id: string): Promise<ContactModel | null> => {
  try {
    return await ContactSchema.findById(_id).exec();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener el contacto en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const postContact = async (
  body: ContactModel
): Promise<ContactModel> => {
  try {
    // const contact = new ContactSchema(generateFakeContact()); 
    const contact = new ContactSchema(body);
    return await contact.save();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al guardar el contacto en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const putContact = async (
  body: ContactModel
): Promise<ContactModel | null> => {
  try {
    return await ContactSchema.findByIdAndUpdate(body._id, body, { new: true });
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al actualizar el contacto en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const deleteContact = async (
  _id: string
): Promise<ContactModel | null> => {
  try {
    return await ContactSchema.findOneAndDelete({ _id: _id });
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al eliminar el contacto en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};
