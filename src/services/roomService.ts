import { Request, Response } from "express";
import roomsData from "../JSON/rooms.json";
import { RoomModel } from "../models/roomModel";

export const getRooms = async (): Promise<RoomModel[]> => {
  return roomsData;
};
export const getRoom = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "Rooms find successfully" }];;
};

export const postRoom = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "Rooms create successfully" }];
};

export const putRoom = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "Rooms update successfully" }];
};

export const deleteRoom = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "Rooms deleted successfully" }];
};
