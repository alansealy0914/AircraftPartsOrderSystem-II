// import { Discount } from '../customerDetail/discount.interface';

export interface Part {
    id: number;
    custId: string;
    partNo: string;
    modRev: string;
    docNo: string;
    docRev: number;
    docRevDate: Date;
    docType: string;
    docTitle: string;
    price: string;
    ticketDate: Date;
    status: string;
}

