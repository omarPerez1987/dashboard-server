import { faker } from "@faker-js/faker";
import { BookingModel } from "../models/bookingModel";
import { executeQuery } from "../config/sql";

export const generateTableBookings = async () => {
  await executeQuery(`
  CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    orderDate VARCHAR(255),
    orderTime TIME,
    checkin VARCHAR(255),
    checkinTime TIME,
    checkout VARCHAR(255),
    checkoutTime TIME,
    notes TEXT,
    idRoom INT,
    status VARCHAR(255),
    FOREIGN KEY (idRoom) REFERENCES rooms(id)
    )
    `);
  };

export const generateFakeBooking = async () => {
  try {
    const [roomIds]: any = await executeQuery("SELECT id FROM rooms");
    const randomRoomId = faker.helpers.arrayElement(
      roomIds.map((row: any) => row.id)
    );

    const fakeBooking = {
      name: faker.person.fullName(),
      orderDate: faker.date.past({ years: 0.5 }).toISOString().split("T")[0],
      orderTime: faker.date.past().toLocaleTimeString(),
      checkin: faker.date.recent({ days: 10 }).toISOString().split("T")[0],
      checkinTime: faker.date.future().toLocaleTimeString(),
      checkout: faker.date.future({ years: 0.05 }).toISOString().split("T")[0],
      checkoutTime: faker.date.future().toLocaleTimeString(),
      notes: faker.lorem.sentence(),
      idRoom: randomRoomId,
      status: faker.helpers.arrayElement([
        "pending",
        "checked-in",
        "checked-out",
      ]),
    };
    return fakeBooking;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
