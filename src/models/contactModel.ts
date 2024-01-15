import Joi from 'joi';

export interface ContactModel {
  photo: string;
  date: string;
  hour: string;
  name: string;
  last_name: string;
  email: string;
  telephone: string;
  archived: boolean;
  review: string;
}


export const contactSchema = Joi.object({
  date: Joi.string().required(),
  hour: Joi.string().required(),
  name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  telephone: Joi.string().required(),
  archived: Joi.boolean().required(),
  review: Joi.string().required(),
});

