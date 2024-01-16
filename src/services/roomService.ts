import { RoomModel, roomSchema } from "../models/roomModel";
import { generateFakeRoom, generateTableRooms } from "../seeds/roomsSeed";
import { executeQuery } from "../config/sql";

export const getRooms = async () => {
  try {
    const [results, fields] = await executeQuery("SELECT * FROM rooms");
    return results;
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener las habitaciones en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const getRoom = async (id: string): Promise<void> => {
  try {
    const [rows]: any = await executeQuery("SELECT * FROM rooms WHERE id = ?", [
      id,
    ]);
    return rows;
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener la habitacion en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const postRoom = async (): Promise<void> => {
  try {
    const [rows]: any = await executeQuery("SHOW TABLES LIKE 'rooms'");
    if (rows.length === 0) {
      generateTableRooms();
    } else {
      const fakeRooms = generateFakeRoom();
      const fakeRoomsKeys = Object.keys(fakeRooms).join(", ");
      const fakeRoomsValues = Object.values(fakeRooms)
        .map(() => `?`)
        .join(", ");

      await executeQuery(
        `INSERT INTO rooms (${fakeRoomsKeys}) VALUES (${fakeRoomsValues})`,
        Object.values(fakeRooms)
      );
    }
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al guardar la habitacion en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const putRoom = async (body: any): Promise<void> => {
  try {
    const { id, ...updatedValues } = body;

    const updateFields = Object.keys(updatedValues)
      .map((key) => `${key} = ?`)
      .join(", ");

    const query = `UPDATE rooms SET ${updateFields} WHERE id = ?`;

    const values = [...Object.values(updatedValues), id];

    const [rows]: any = await executeQuery(query, values);
    return rows;
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al actualizar la habitacion en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const deleteRoom = async (id: string): Promise<Object> => {
  try {
    await executeQuery(`DELETE FROM rooms WHERE id = ?`, [id]);
    return { message: "Habitación eliminada con exito" };
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al eliminar la habitacion en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};
