import { BookingModel, BookingSchema } from "../models/bookingModel";
import { generateFakeBooking } from "../seeds/bookingsSeed";

export const getBookings = async (): Promise<BookingModel[]> => {
  try {
    return await BookingSchema.find().exec();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener las reservas de la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const getBooking = async (_id: string): Promise<BookingModel | null> => {
  try {
    return await BookingSchema.findById(_id);
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener la reserva de la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const postBooking = async (
  body: BookingModel
): Promise<BookingModel> => {
  try {
    const booking = new BookingSchema(body);
    return await booking.save();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al guardar la reserva en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const putBooking = async (
  body: BookingModel
): Promise<BookingModel | null> => {
  try {
    return await BookingSchema.findByIdAndUpdate(body._id, body, { new: true });
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al actualizar la reserva en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const deleteBooking = async (
  _id: string
): Promise<BookingModel | null> => {
  try {
    return await BookingSchema.findOneAndDelete({ _id: _id });
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al eliminar la reserva en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};
