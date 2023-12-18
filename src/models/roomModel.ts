export interface RoomModel {
    photo: string | null;
    id: string;
    room: string;
    bed: string;
    facilities: string[];
    description: string;
    price: number;
    discount: number;
    cancel: string;
    status: string;
  }