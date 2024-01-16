import { executeQuery } from "../config/sql";
import { ContactModel, contactSchema } from "../models/contactModel";
import {
  generateFakeContact,
  generateTableContacts,
} from "../seeds/contactsSeed";

export const getContacts = async () => {
  try {
    const [results, fields] = await executeQuery("SELECT * FROM contacts");
    return results;
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener los contactos en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const getContact = async (id: string): Promise<void> => {
  try {
    const [rows]: any = await executeQuery(
      `SELECT * FROM contacts WHERE id = ?`,
      [id]
    );
    return rows;
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener el usuario en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const postContact = async (): Promise<void> => {
  try {
    const [rows]: any = await executeQuery("SHOW TABLES LIKE 'contacts'");
    if (rows.length === 0) {
      generateTableContacts();
    } else {
      const fakeContact = generateFakeContact();
      const fakeContactsKeys = Object.keys(fakeContact).join(", ");
      const fakeContactsValues = Object.values(fakeContact)
        .map(() => `?`)
        .join(", ");

      await executeQuery(
        `INSERT INTO contacts (${fakeContactsKeys}) VALUES (${fakeContactsValues})`,
        Object.values(fakeContact)
      );
    }
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al guardar el contacto en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const putContact = async (body: any): Promise<void> => {
  try {
    const { id, ...updatedValues } = body;

    const updateFields = Object.keys(updatedValues)
      .map((key) => `${key} = ?`)
      .join(", ");

    const query = `UPDATE contacts SET ${updateFields} WHERE id = ?`;

    const values = [...Object.values(updatedValues), id];

    const [rows]: any = await executeQuery(query, values);
    return rows;
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al actualizar el contacto en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const deleteContact = async (id: string): Promise<Object> => {
  try {
    await executeQuery(`DELETE FROM contacts WHERE id = ?`, [id]);
    return { message: "Contacto eliminado con exito" };
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al eliminar el usuario en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};
