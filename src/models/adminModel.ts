import Joi from 'joi'

export interface AdminModel {
  email: string;
  name: string;
  password: string;
}

export const adminSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.number(),
});
