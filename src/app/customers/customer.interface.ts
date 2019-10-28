 import { Discount } from '../customerDetail/discount.interface';
 import { Guid } from 'guid-typescript';

export interface Customer {
    id: Guid;
    CustomerId: number;
    FirstName: string;
    LastName: string;
    ClientCode: string;
    BusName: string;
    Office: string;
    doctitle: string;
    getsDiscount: boolean;
    discount: Discount;
 }
