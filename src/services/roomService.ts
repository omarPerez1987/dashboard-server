
import { RoomModel, roomSchema } from "../models/roomModel";
import { generateFakeRoom } from "../seeds/roomsSeed";

export const getRooms = async (): Promise<RoomModel[]> => {
  try {
    return await roomSchema.find().exec();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener las habitaciones en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const getRoom = async (_id: string): Promise<RoomModel | null> => {
  try {
    return await roomSchema.findById(_id).exec();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener la habitacion en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const postRoom = async (body: RoomModel): Promise<RoomModel> => {
  try {
    const room = new roomSchema(generateFakeRoom());
    // const room = new roomSchema(body);
    return await room.save();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al guardar la habitacion en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const putRoom = async (body: RoomModel): Promise<RoomModel | null> => {
  try {
    return await roomSchema.findByIdAndUpdate(body._id, body, { new: true });
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al actualizar la habitacion en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const deleteRoom = async (_id: string): Promise<RoomModel | null> => {
  try {
    return await roomSchema.findOneAndDelete({ _id: _id });
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al eliminar la habitacion en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};
