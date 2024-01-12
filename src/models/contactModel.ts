import mongoose, { Schema } from "mongoose";

export interface ContactModel {
  _id: mongoose.Types.ObjectId;
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

const contactSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  photo: String,
  date: String,
  hour: String,
  name: String,
  last_name: String,
  email: { type: String, required: true },
  telephone: String,
  archived: Boolean,
  review: String,
});

export const ContactSchema = mongoose.model<ContactModel>(
  "contacts",
  contactSchema
);
