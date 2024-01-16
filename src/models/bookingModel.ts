import Joi from 'joi';
import { RoomModel } from "./roomModel";

export interface BookingModel {
  name: string;
  orderDate: string;
  orderTime: string;
  checkin: string;
  checkinTime: string;
  checkout: string;
  checkoutTime: string;
  notes: string;
  idRoom: number | unknown;
  check: string;
}

export const bookingSchema = Joi.object({
  name: Joi.string().required(),
  orderDate: Joi.string().required(),
  orderTime: Joi.string().required(),
  checkin: Joi.string().required(),
  checkinTime: Joi.string().required(),
  checkout: Joi.string().required(),
  checkoutTime: Joi.string().required(),
  notes: Joi.string(),
  idRoom: Joi.string().required(),
  check: Joi.string().required(),
});
