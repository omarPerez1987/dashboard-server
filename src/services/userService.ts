import { executeQuery } from "../config/sql";
import { UserModel, userSchema } from "../models/userModel";
import { generateFakeUser, generateTableUser } from "../seeds/usersSeed";

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

// export const getUser = async (_id: string): Promise<UserModel | null> => {
//   try {
//     return await userSchema.findById(_id).exec();
//   } catch (error) {
//     console.log(error);
//     const databaseError: any = new Error(
//       "Error al obtener el usuario en la base de datos."
//     );
//     databaseError.status = 404;
//     throw databaseError;
//   }
// };

export const postUser = async (body: UserModel): Promise<void> => {
  try {
    const [rows]: any = await executeQuery("SHOW TABLES LIKE users");
    if (rows.length === 0) {
      generateTableUser();
    }
    const fakeUser = generateFakeUser();
    await executeQuery(
      `
      INSERT INTO users (photo, name, email, phone, description, status, startDate, position, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
      Object.values(fakeUser)
    );
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al guardar el usuario en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

// export const putUser = async (body: UserModel): Promise<UserModel | null> => {
//   try {
//     return await userSchema.findByIdAndUpdate(body._id, body, { new: true });
//   } catch (error) {
//     console.log(error);
//     const databaseError: any = new Error(
//       "Error al actualizar el usuario en la base de datos."
//     );
//     databaseError.status = 404;
//     throw databaseError;
//   }
// };

// export const deleteUser = async (_id: string): Promise<UserModel | null> => {
//   try {
//     return await userSchema.findOneAndDelete({_id: _id});
//   } catch (error) {
//     console.log(error);
//     const databaseError: any = new Error(
//       "Error al eliminar el usuario en la base de datos."
//     );
//     databaseError.status = 404;
//     throw databaseError;
//   }
// };
