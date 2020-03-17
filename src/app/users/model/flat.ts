import { User } from './user';

export class Flat{
    flatNo: number ;
	owner?: User ;
	resident?: User ;
	area: number ;
	block: string ;
}