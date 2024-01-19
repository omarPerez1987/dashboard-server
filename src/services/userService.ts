import { executeQuery } from "../config/sql";
import { UserModel, userSchema } from "../models/userModel";
import { generateFakeUser, generateTableUsers } from "../seeds/usersSeed";

export const getUsers = async () => {
  try {
    const [results, fields] = await executeQuery("SELECT * FROM users");
    return results;
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener los usuarios en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const getUser = async (id: string): Promise<void> => {
  try {
    const [rows]: any = await executeQuery(`SELECT * FROM users WHERE id = ?`, [
      id,
    ]);
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

export const postUser = async (): Promise<void> => {
  try {
    const [rows]: any = await executeQuery("SHOW TABLES LIKE 'users'");
    if (rows.length === 0) {
      generateTableUsers();
    } else {
      const fakeUser = generateFakeUser();
      const fakeUserKeys = Object.keys(fakeUser).join(", ");
      const fakeUserValues = Object.values(fakeUser)
        .map(() => `?`)
        .join(", ");

      await executeQuery(
        `INSERT INTO users (${fakeUserKeys}) VALUES (${fakeUserValues})`,
        Object.values(fakeUser)
      );
    }
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al guardar el usuario en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const putUser = async (body: any): Promise<void> => {
  try {
    const { id, ...updatedValues } = body;

    const updateFields = Object.keys(updatedValues)
      .map((key) => `${key} = ?`)
      .join(", ");

    const query = `UPDATE users SET ${updateFields} WHERE id = ?`;

    const values = [...Object.values(updatedValues), id];

    const [rows]: any = await executeQuery(query, values);
    return rows;
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al actualizar el usuario en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const deleteUser = async (id: string): Promise<Object> => {
  try {
    await executeQuery(`DELETE FROM users WHERE id = ?`, [id]);
    return { message: "Usuario eliminado con exito" };
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al eliminar el usuario en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};
