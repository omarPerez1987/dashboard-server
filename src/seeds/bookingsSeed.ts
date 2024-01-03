import { faker } from "@faker-js/faker";
import { BookingModel } from "../models/bookingModel";

export const generateFakeBooking = (): BookingModel => {
  return {
    name: faker.person.fullName(),
    id: faker.string.alphanumeric(7),
    orderDate: faker.date.past().toLocaleDateString(),
    orderTime: faker.date.past().toLocaleTimeString(),
    checkin: faker.date.future().toLocaleDateString(),
    checkinTime: faker.date.future().toLocaleTimeString(),
    checkout: faker.date.future().toLocaleDateString(),
    checkoutTime: faker.date.future().toLocaleTimeString(),
    notes: faker.lorem.sentence(),
    idRoom: faker.string.nanoid(8),
    check: faker.helpers.arrayElement(["pending", "checked-in", "checked-out"]),
  };
};

