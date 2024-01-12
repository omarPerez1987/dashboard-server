import { faker } from "@faker-js/faker";
import { BookingModel } from "../models/bookingModel";
import mongoose from "mongoose";

export const generateFakeBooking = (): BookingModel => {
  return {
    _id: new mongoose.Types.ObjectId(),
    name: faker.person.fullName(),
    orderDate: faker.date.past({ years: 0.5 }).toISOString().split("T")[0],
    orderTime: faker.date.past().toLocaleTimeString(),
    checkin: faker.date.recent({ days: 10 }).toISOString().split("T")[0],
    checkinTime: faker.date.future().toLocaleTimeString(),
    checkout: faker.date.future({ years: 0.05 }).toISOString().split("T")[0],
    checkoutTime: faker.date.future().toLocaleTimeString(),
    notes: faker.lorem.sentence(),
    idRoom: faker.string.nanoid(8),
    check: faker.helpers.arrayElement(["pending", "checked-in", "checked-out"]),
  };
};
