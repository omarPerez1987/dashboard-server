import { executeQuery } from "../config/sql";
import { BookingModel, bookingSchema } from "../models/bookingModel";
import { RoomModel, roomSchema } from "../models/roomModel";
import {
  generateFakeBooking,
  generateTableBookings,
} from "../seeds/bookingsSeed";

export const getBookings = async () => {
  try {
    const [results, fields] = await executeQuery(`
      SELECT bookings.*, rooms.*
      FROM bookings
      JOIN rooms ON bookings.idRoom = rooms.id
    `);
    return results;
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener las reservas de la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const getBooking = async (id: string) => {
  try {
    const [rows]: any = await executeQuery(`
      SELECT bookings.*, rooms.*
      FROM bookings
      INNER JOIN rooms ON bookings.idRoom = rooms.id
      WHERE bookings.id = ?
    `, [id]);
    return rows;
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener la reserva de la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const postBooking = async (): Promise<void> => {
  try {
    const [rows]: any = await executeQuery("SHOW TABLES LIKE 'bookings'");
    if (rows.length === 0) {
      generateTableBookings();
    } else {
      const fakeBooking = await generateFakeBooking();
      const fakeContactsKeys = Object.keys(fakeBooking).join(", ");
      const fakeContactsValues = Object.values(fakeBooking)
        .map(() => `?`)
        .join(", ");

      await executeQuery(
        `INSERT INTO bookings (${fakeContactsKeys}) VALUES (${fakeContactsValues})`,
        Object.values(fakeBooking)
      );
    }
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al guardar la reserva en la base de datos."
    );
    databaseError.status = 500;
    throw databaseError;
  }
};

export const putBooking = async (body: any): Promise<void> => {
  try {
    const { id, ...updatedValues } = body;

    const updateFields = Object.keys(updatedValues)
      .map((key) => `${key} = ?`)
      .join(", ");

    const query = `UPDATE bookings SET ${updateFields} WHERE id = ?`;

    const values = [...Object.values(updatedValues), id];

    const [rows]: any = await executeQuery(query, values);
    return rows;
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al actualizar la reserva en la base de datos."
    );
    databaseError.status = 500;
    throw databaseError;
  }
};

export const deleteBooking = async (id: string): Promise<Object> => {
  try {
    await executeQuery(`DELETE FROM bookings WHERE id = ?`, [id]);
    return { message: "Reserva eliminada con exito" };
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al eliminar la reserva en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};
