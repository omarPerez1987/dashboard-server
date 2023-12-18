import { Router } from 'express';
import bookingController from './controllers/bookingController';
import contactController from './controllers/contactController';
import roomController from './controllers/roomController';
import userController from './controllers/userController';

const router = Router();


// Rutas para Bookings
router.use('/api/bookings', bookingController);

// Rutas para Rooms
router.use('/api/contacts', contactController);

// Rutas para Rooms
router.use('/api/rooms', roomController);

// Rutas para Users
router.use('/api/users', userController);







export default router;