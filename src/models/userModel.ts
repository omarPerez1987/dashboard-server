import Joi from 'joi';

export interface UserModel {
  photo: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  status: string;
  startDate: string;
  position: string;
  password: string;
}


export const userSchema = Joi.object({
  photo: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
  startDate: Joi.string().required(),
  position: Joi.string().required(),
  password: Joi.string().required(),
});

