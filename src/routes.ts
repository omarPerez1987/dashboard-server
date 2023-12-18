import { Router } from 'express';
import roomController from './controllers/roomController';



const router = Router();
// Rutas para Rooms
router.use('/api/rooms', roomController);

export default router;