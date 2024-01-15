import { BookingModel, BookingSchema } from "../models/bookingModel";
import { RoomModel, RoomSchema } from "../models/roomModel";
import { generateFakeBooking } from "../seeds/bookingsSeed";
// añadiendo rama

export const getBookings = async (): Promise<BookingModel[]> => {
  try {
    const dataBookings = await BookingSchema.find().exec();
    const dataRooms = await RoomSchema.find().exec();

    const bookingsWithRooms: BookingModel[] = dataBookings.map((booking) => {
      const room = dataRooms.find(
        (room) => room._id.toString() === booking.idRoom.toString()
      );

      const bookingWithRoom: BookingModel = {
        ...booking.toObject(),
        dataRoom: room ? room.toObject() : null,
      };

      return bookingWithRoom;
    });

    return bookingsWithRooms;
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener las reservas de la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const getBooking = async (_id: string) => {
  try {
    const dataOneBooking = await BookingSchema.findById(_id).exec();
    const dataRooms = await RoomSchema.find().exec();
    
    const searchIdRoom = () => {
      let result: BookingModel | null = null;

      dataRooms.forEach((room) => {
        if (room._id.toString() === dataOneBooking?.idRoom) {
          result = {
            ...dataOneBooking?.toObject(),
            dataRoom: room?.toObject(),
          };
        }
      });

      return result;
    };

    return searchIdRoom();
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
    // const booking = new BookingSchema(generateFakeBooking());
    // return await booking.save();
    const booking = new BookingSchema(body);
    const savedBooking = await booking.save();
    const dataRoom = await RoomSchema.findById(savedBooking.idRoom).exec();

    if (dataRoom) {
      const result: BookingModel = {
        ...(savedBooking?.toObject() as BookingModel),
        dataRoom: dataRoom?.toObject() as RoomModel,
      };

      return result;
    } else {
      const error: any = new Error('No se encontró la habitación correspondiente a la reserva.');
      error.status = 404;
      throw error;
    }
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      'Error al guardar la reserva en la base de datos.'
      );
      databaseError.status = 500;
      throw databaseError;
    }
  };

export const putBooking = async (body: BookingModel): Promise<BookingModel | null> => {
  try {
    const dataUpdateBooking = await BookingSchema.findByIdAndUpdate(body._id, body, { new: true });
    const dataRoom = await RoomSchema.findById(dataUpdateBooking?.idRoom).exec();

    if (dataRoom) {
      const result: BookingModel = {
        ...(dataUpdateBooking?.toObject() as BookingModel),
        dataRoom: dataRoom?.toObject() as RoomModel,
      };

      return result;
    } else {
      const error: any = new Error('No se encontró la habitación correspondiente a la reserva.');
      error.status = 404;
      throw error;
    }
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      'Error al actualizar la reserva en la base de datos.'
    );
    databaseError.status = 500;
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
