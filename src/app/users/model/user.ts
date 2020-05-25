import { Flat } from './flat';

export class User {
    persnId: number;
    persnFirstName: string;
    persnLastName: string;
    mobileNumber: number;
    email: string;
    gender: string;
    type: string;
    owner: Flat;
    amtDue: number;
}