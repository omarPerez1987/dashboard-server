import Joi from 'joi';

export interface RoomModel {
  _id: number;
  photo: string | null;
  room: string;
  bed: string;
  facilities: string[];
  description: string;
  price: number;
  discount: number;
  cancel: string;
  status: string;
}


export const roomSchema = Joi.object({
  id: Joi.number().integer().positive(),
  photo: Joi.string().allow(null),
  room: Joi.string().required(),
  bed: Joi.string().required(),
  facilities: Joi.array().items(Joi.string()),
  description: Joi.string().required(),
  price: Joi.number().required(),
  discount: Joi.number().required(),
  cancel: Joi.string().required(),
  status: Joi.string().required(),
});

