import { Flat } from './flat';

export class User {
    persnId: number;
    persnFirstName: string;
    persnLastName: string;
    mobileNumber: number;
    gender: string;
    type: string;
    owner: Flat;
    amtDue: number;
}