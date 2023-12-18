import { Router, Request, Response } from 'express';
import { RoomModel } from '../models/roomModel';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const rooms: RoomModel[] = []
  res.send('hola desde room controller')
  res.json(rooms);
});

export default router;