export interface BookingModel {
    name: string;
    id: string;
    orderDate: string;
    orderTime: string;
    checkin: string;
    checkinTime: string;
    checkout: string;
    checkoutTime: string;
    notes: string;
    idRoom: string;
    check: string;
    room?: string;
    price?: number;
    description?: string;
    facilities?: Array<string> ;
    photo?: string | null;
    status?: string;
  }